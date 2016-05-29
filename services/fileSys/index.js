/**
 * Created by slanska on 2016-05-28.
 */
"use strict";
///<reference path="../../typings/server.d.ts"/>
var express = require('express');
var path = require('path');
var fs = require('fs');
var config = require('./config');
exports.router = express.Router();
/*
 GET filesys
 */
exports.router.get('/filesys', function (req, res, next) {
    var p = req.params.path || '';
    var fullPath = path.join(config.rootPath, p);
    fs.readdir(fullPath, function (err, data) {
        if (!err) {
            res.json(data);
        }
        else
            next(err);
    });
});
//# sourceMappingURL=index.js.map