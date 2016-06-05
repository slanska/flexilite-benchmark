/**
 * Created by slanska on 2016-05-28.
 */
"use strict";
///<reference path="../../typings/server.d.ts"/>
var express = require('express');
var path = require('path');
var fs = require('fs');
var config = require('./config');
var sqlite3 = require('sqlite3');
var router = express.Router();
/*
 GET db/tables
 Returns list of tables
 */
router.get('/list', function (req, res, next) {
    try {
        var d = __dirname;
        var q = req.query;
        var fn = path.join(config.dbPath, q.dir, q.fileName);
        var db = null;
        db = new sqlite3.Database(fn, sqlite3.OPEN_READWRITE
            | 131072 /* SHARED_CACHE */ | 524288 /* WAL */, function (err) {
        });
        db.serialize();
        db.loadExtension(config.flexiliteLibPath, function (err) {
            if (err)
                throw err;
        });
        // db.all(`select * from [trips] limit 1;`, (err, rr) =>
        // {
        //     if (err)
        //         throw err;
        // });
        var ofs = Math.floor(Math.random() * 10000.0);
        db.all("select * from [trips] limit 100 offset " + ofs + ";", function (err, rows) {
            if (!err)
                res.json(rows);
            // Remember selected db in recent list
            addFileToRecent(fn);
        });
        db.close(function (err) {
            if (err)
                throw err;
        });
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
module.exports = router;
//# sourceMappingURL=index.js.map