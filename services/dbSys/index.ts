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

/*
 GET db/tables
 Returns list of tables
 */
router.get('/list', (req:express.Request, res:express.Response, next)=>
{
    try
    {
        var d = __dirname;

        var q = req.query as DBSys.IDBFileOpen;
        var fn = path.join(config.dbPath, q.dir, q.fileName);

        var db:sqlite3.Database = null;
        db = new sqlite3.Database(fn, sqlite3.OPEN_READWRITE
            | SQLITE_OPEN_FLAGS.SHARED_CACHE | SQLITE_OPEN_FLAGS.WAL
            ,
            (err)=>
            {

            });

        db.serialize();

        (db as any).loadExtension(config.flexiliteLibPath, (err:Error)=>
        {
            if (err)
                throw err;
        });

        // db.all(`select * from [trips] limit 1;`, (err, rr) =>
        // {
        //     if (err)
        //         throw err;
        // });

        var ofs = Math.floor(Math.random() * 10000.0);
        db.all(`select * from [trips] limit 100 offset ${ofs};`, (err, rows)=>
            // db.all(`select * from sqlite_master where type in ('table', 'view');`, (err, rows)=>
        {
            if (!err)
                res.json(rows);

            // Remember selected db in recent list
            addFileToRecent(fn);
        });
        db.close((err:Error)=>
        {
            if (err)
                throw err;
        });
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
