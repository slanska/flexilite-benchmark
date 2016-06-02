/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../typings/server.d.ts"/>

import express = require('express');
import path = require('path');
import fs = require('fs');
import config = require('./config');
import qs = require('qs');
import Promise = require('bluebird');
import _ = require('lodash');

var router = express.Router();

/*
 GET filesys
 */
router.get('/filesys', (req:express.Request, res:express.Response, next)=>
{
    var p = qs.parse(req.query).path || '';
    var fullPath = path.join(config.rootPath, p);
    fs.readdir(fullPath, (err, fileNames)=>
    {
        if (!err)
        {
            var promises = [];
            _.forEach(fileNames, (n:string)=>
            {
                promises.push(new Promise((resolve, reject)=>
                {
                    var fn = path.join(fullPath, n);
                    fs.stat(fn, (err, stats:fs.Stats) =>
                    {
                        if (!err)
                        {
                            resolve(stats);
                        }
                        else reject(err);
                    });
                }));
            });

            Promise.all(promises).then((fileStats)=>
            {
                var d = {} as FileSys.IFileList;
                d.path = p;
                d.files = [];
                _.forEach(fileStats, (item:fs.Stats, ii:number)=>
                {
                    let fStats = {} as FileSys.IFileStats;
                    fStats.created = item.ctime;
                    fStats.name = fileNames[ii];
                    fStats.directoryName = p;
                    fStats.isDirectory = item.isDirectory();
                    fStats.size = item.size;
                    fStats.lastAccessed = item.atime;
                    fStats.modified = item.mtime;
                    d.files.push(fStats);
                });

                
                res.json(d);
            }).catch((err)=>
            {
                next(err);
            });
        }
        else next(err);
    });
});

export = router;
