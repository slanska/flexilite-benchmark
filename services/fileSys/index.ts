/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../typings/server.d.ts"/>

import express = require('express');
import path = require('path');
import fs = require('fs');
import config = require('./config');

export var router = express.Router();

/*
 GET filesys
 */
router.get('/filesys', (req:express.Request, res:express.Response, next)=>
{
    var p = req.params.path || '';
    var fullPath = path.join(config.rootPath, p);
    fs.readdir(fullPath, (err, data)=>
    {
        if (!err)
        {
            res.json(data);
        }
        else next(err);
    });
});
