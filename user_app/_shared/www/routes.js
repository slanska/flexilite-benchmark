/**
 * Created by slanska on 2016-06-25.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'fsmrouter'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../typings/browser.d.ts"/>
    var FSMRouter = require('fsmrouter');
    function loadWebixModule(path) {
        var result = function (req, next) {
            var pp = new Promise(function (resolve, reject) {
                var modulePath = FSMRouter.join('views', path);
                require([modulePath], function (m) {
                    var ui = webix.ui(m.$ui);
                    if (m.$oninit)
                        m.$oninit(ui, null);
                    resolve(true);
                });
            });
            return pp;
        };
        return result;
    }
    function switchTab(tabID) {
        var result = function (req, next) {
        };
        return result;
    }
    var dataRoute = FSMRouter.add('data', loadWebixModule('db/start'));
    dataRoute.add('open', loadWebixModule('db/open'));
    dataRoute.add('create', loadWebixModule('db/create'));
    var browseRoute = dataRoute.add('browse/:dbPath', loadWebixModule('db/browse'));
    var tableRoute = browseRoute.add('table/:tableName', loadWebixModule());
    tableRoute.add('design', switchTab());
    tableRoute.add('refactoring', switchTab());
    tableRoute.add('data', switchTab());
    return FSMRouter;
});
//# sourceMappingURL=routes.js.map