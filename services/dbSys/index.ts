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
import sqlite3 = require('sqlite3');

var router = express.Router();

router.get('/list', (req:express.Request, res:express.Response, next)=>
{
    try
    {
        var q = req.query as DBSys.IDBFileOpen;
        var fn = path.join(config.dbPath, q.dir, q.fileName);

        var db:sqlite3.Database = null;
        db = new sqlite3.Database(fn, sqlite3.OPEN_READWRITE
            | SQLITE_OPEN_FLAGS.SHARED_CACHE | SQLITE_OPEN_FLAGS.WAL
        );

        (db as any).loadExtension.sync(db, config.flexiliteLibPath);

        var ofs = Math.floor(Math.random() * 100000.0);
        var rows = db.all.sync(db, `select c.*, (select [Value] from [.names] n where n.NameID = c.NameID limit 1) as Name from [.classes] c;`);
        res.json(rows);

        // Remember selected db in recent list
        addFileToRecent(fn);

        db.close.sync(db);
    }
    catch (err)
    {
        // TODO Error handling
        res.json({err: err});
        console.log(err);
    }
});


/*
 GET db/open

 */
router.get('/table', (req:express.Request, res:express.Response, next)=>
{
});

function addFileToRecent(fileName:string)
{
    var p = path.join(__dirname, config.dataPath, 'recent_databases.json');
    fs.readFile(p, 'utf8', (err, d:string)=>
    {
        if (err)
        {
            if (err.code === 'ENOENT')
            {
                d = '{}';
            }
            else throw err;
        }

        var list = JSON.parse(d || '{}');
        list[fileName] = Date.now();
        fs.writeFileSync(p, JSON.stringify(list), 'utf8');
    });
}

/*
 GET db/recent
 */
router.get('/recent', (req:express.Request, res:express.Response, next)=>
{
    var p = path.join(__dirname, config.dataPath, 'recent_databases.json');
    fs.stat(p, (err, stats)=>
    {
        if (err)
        {
            if (err.code === 'ENOENT')
                res.json({});
            else throw err;
        }
        else
        {
            var list = JSON.parse(fs.readFileSync(p, 'utf8'));
            res.json(list);
        }
    });
});

export = router;
