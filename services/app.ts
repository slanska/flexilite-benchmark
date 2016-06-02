/**
 * Created by slanska on 2016-05-29.
 */

///<reference path="../typings/server.d.ts"/>

import express = require('express');
import path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
import cors = require('cors');

var dbSys = require('./dbSys/index');
var fileSys = require('./fileSys/index');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../user_app', '_shared', 'www')));
// app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.use(cors());
app.use('/', fileSys);
app.use('/db', dbSys);

// catch 404 and forward to error handler
app.use((req:express.Request, res:express.Response, next)=>
{
    var err:any = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development')
{
    app.use((err:any, req:express.Request, res:express.Response, next)=>
    {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err:any, req:express.Request, res:express.Response, next)=>
{
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

export = app;
