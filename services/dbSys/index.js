/**
 * Created by slanska on 2016-05-28.
 */
"use strict";
///<reference path="../../typings/server.d.ts"/>
var express = require('express');
var router = express.Router();
/*
 GET db/tables
 Returns list of tables
 */
router.get('/tables', function (req, res, next) {
});
/*
 GET db/open

 */
router.get('/open', function (req, res, next) {
});
/*
 GET db/recent
 */
router.get('/recent', function (req, res, next) {
    var p = req.params.path || '';
});
module.exports = router;
//# sourceMappingURL=index.js.map