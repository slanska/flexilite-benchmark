/**
 * Created by slanska on 2016-07-23.
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
    var DBHome = {};
    var ui = { view: 'layout' };
    // TODO Menu
    ui.rows = [{ gravity: 0.1 }, { $subview: true }, { gravity: 0.1 }];
    DBHome.$ui = ui;
    return DBHome;
});
//# sourceMappingURL=index.js.map