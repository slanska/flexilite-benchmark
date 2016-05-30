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
 GET db/tables
 Returns list of tables
 */
router.get('/tables', (req:express.Request, res:express.Response, next)=>
{
});

/*
 GET db/open

 */
router.get('/open', (req:express.Request, res:express.Response, next)=>
{
});

/*
 GET db/recent
 */
router.get('/recent', (req:express.Request, res:express.Response, next)=>
{
    var p = req.params.path || '';

});

export = router;
