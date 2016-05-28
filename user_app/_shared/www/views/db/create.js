/**
 * Created by slanska on 2016-05-28.
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
    var DB;
    (function (DB) {
        DB.Create = {};
        var ui = { view: 'header' };
        ui.template = "DB Create";
        DB.Create.$ui = ui;
    })(DB || (DB = {}));
    return DB.Create;
});
//# sourceMappingURL=create.js.map