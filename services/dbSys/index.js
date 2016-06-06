/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'express', 'path', 'fs', './config', 'sqlite3'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../typings/server.d.ts"/>
    var express = require('express');
    var path = require('path');
    var fs = require('fs');
    var config = require('./config');
    var sqlite3 = require('sqlite3');
    var router = express.Router();
    router.get('/list', function (req, res, next) {
        try {
            var q = req.query;
            var fn = path.join(config.dbPath, q.dir, q.fileName);
            var db = null;
            db = new sqlite3.Database(fn, sqlite3.OPEN_READWRITE
                | 131072 /* SHARED_CACHE */ | 524288 /* WAL */);
            db.loadExtension.sync(db, config.flexiliteLibPath);
            var ofs = Math.floor(Math.random() * 100000.0);
            var rows = db.all.sync(db, "select c.*, (select [Value] from [.names] n where n.NameID = c.NameID limit 1) as Name from [.classes] c;");
            res.json(rows);
            // Remember selected db in recent list
            addFileToRecent(fn);
            db.close.sync(db);
        }
        catch (err) {
            // TODO Error handling
            res.json({ err: err });
            console.log(err);
        }
    });
    /*
     GET db/open
    
     */
    router.get('/table', function (req, res, next) {
    });
    function addFileToRecent(fileName) {
        var p = path.join(__dirname, config.dataPath, 'recent_databases.json');
        fs.readFile(p, 'utf8', function (err, d) {
            if (err) {
                if (err.code === 'ENOENT') {
                    d = '{}';
                }
                else
                    throw err;
            }
            var list = JSON.parse(d || '{}');
            list[fileName] = Date.now();
            fs.writeFileSync(p, JSON.stringify(list), 'utf8');
        });
    }
    /*
     GET db/recent
     */
    router.get('/recent', function (req, res, next) {
        var p = path.join(__dirname, config.dataPath, 'recent_databases.json');
        fs.stat(p, function (err, stats) {
            if (err) {
                if (err.code === 'ENOENT')
                    res.json({});
                else
                    throw err;
            }
            else {
                var list = JSON.parse(fs.readFileSync(p, 'utf8'));
                res.json(list);
            }
        });
    });
    return router;
});
//# sourceMappingURL=index.js.map