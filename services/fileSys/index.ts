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
    fs.readdir(fullPath, (err, data)=>
    {
        if (!err)
        {
            var promises = [];
            _.forEach(data, (n:string)=>
            {
                promises.push(new Promise((resolve, reject)=>
                {
                    var fn = path.join(fullPath, n);
                    fs.stat(fn, (err, stats:fs.Stats) =>
                    {
                        if (!err)
                        {
                            // stats.
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
                d.files = fileStats;
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
