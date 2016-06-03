/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'express', 'path', 'fs', './config', 'qs', 'bluebird', 'lodash'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../typings/server.d.ts"/>
    var express = require('express');
    var path = require('path');
    var fs = require('fs');
    var config = require('./config');
    var qs = require('qs');
    var Promise = require('bluebird');
    var _ = require('lodash');
    var router = express.Router();
    /*
     GET filesys
     */
    router.get('/filesys', function (req, res, next) {
        var p = qs.parse(req.query).path || '';
        var fullPath = path.join(config.rootPath, p);
        fs.readdir(fullPath, function (err, fileNames) {
            if (!err) {
                var promises = [];
                _.forEach(fileNames, function (n) {
                    promises.push(new Promise(function (resolve, reject) {
                        var fn = path.join(fullPath, n);
                        fs.stat(fn, function (err, stats) {
                            if (!err) {
                                resolve(stats);
                            }
                            else
                                reject(err);
                        });
                    }));
                });
                Promise.all(promises).then(function (fileStats) {
                    var d = {};
                    d.path = p;
                    d.files = [];
                    if (!_.isEmpty(p)) {
                        var fStats = {};
                        fStats.type = 0 /* ParentDirectory */;
                        fStats.name = '..';
                        fStats.directoryName = path.join(p, '..');
                        d.files.push(fStats);
                    }
                    _.forEach(fileStats, function (item, ii) {
                        var fStats = {};
                        fStats.created = item.ctime;
                        fStats.name = fileNames[ii];
                        fStats.directoryName = p;
                        if (item.isDirectory())
                            fStats.type = 1 /* Directory */;
                        else
                            fStats.type = 2 /* File */;
                        fStats.size = item.size;
                        fStats.lastAccessed = item.atime;
                        fStats.modified = item.mtime;
                        d.files.push(fStats);
                    });
                    res.json(d);
                }).catch(function (err) {
                    next(err);
                });
            }
            else
                next(err);
        });
    });
    return router;
});
//# sourceMappingURL=index.js.map