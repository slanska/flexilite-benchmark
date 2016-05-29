/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'express'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../typings/server.d.ts"/>
    var express = require('express');
    var router = express.Router();
    /*
    GET db/open
     */
    router.get('open', function (req, res, next) {
    });
    /*
     GET db/recent
     */
    router.get('/recent', function (req, res, next) {
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
    return router;
});
//# sourceMappingURL=index.js.map