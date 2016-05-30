/**
 * Created by slanska on 2016-05-29.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    var DBRecent = {};
    var ui = { view: 'form' };
    DBRecent.$ui = ui;
    return DBRecent;
});
//# sourceMappingURL=recent.js.map