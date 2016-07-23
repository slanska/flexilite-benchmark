/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './open', './recent'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    /*
     Home page for database operations.
     Composed from 2 vertical panels. Panel 1 displays recently opened databases,
     panel 2 displays file manager view, with given root directory.
     */
    var open = require('./open');
    var recent = require('./recent');
    var DBHome = {};
    var ui = { view: 'layout' };
    ui.cols = [open, recent];
    ui.height = 500;
    DBHome.$ui = ui;
    return DBHome;
});
//# sourceMappingURL=start.js.map