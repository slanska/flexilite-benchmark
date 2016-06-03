/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'express', 'path', 'sqlite3'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../typings/server.d.ts"/>
    var express = require('express');
    var path = require('path');
    var sqlite = require('sqlite3');
    var router = express.Router();
    /*
     GET db/tables
     Returns list of tables
     */
    router.get('/tables', function (req, res, next) {
        try {
            var d = __dirname;
            console.log(d);
            var q = req.query;
            var fn = path.join('/', q.dir, q.fileName);
            var db = new sqlite.Database(fn, sqlite.OPEN_READWRITE);
            db.all("select * from sqlite_master", function (err, rows) {
                if (!err)
                    res.json(rows);
            });
        }
        catch (err) {
            console.log(err);
        }
    });
    /*
     GET db/open
    
     */
    router.get('/open', function (req, res, next) {
    });
    /*
     GET db/recent
     */
    router.get('/recent', function (req, res, next) {
        var p = req.params.path || '';
    });
    return router;
});
//# sourceMappingURL=index.js.map