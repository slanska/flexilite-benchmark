/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../typings/server.d.ts"/>

import express = require('express');
import path = require('path');
import fs = require('fs');
import config = require('./config');

export var router = express.Router('/db');

/*
GET db/open
 */
router.get('open', (req:express.Request, res:express.Response, next)=>
{
});

/*
 GET db/recent
 */
router.get('/recent', (req:express.Request, res:express.Response, next)=>
{
    var p = req.params.path || '';
    // var fullPath = path.join(config.rootPath, p);
    // fs.readdir(fullPath, (err, data)=>
    // {
    //     if (!err)
    //     {
    //         res.json(data);
    //     }
    //     else next(err);
    // });
});
