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
    var FSMRouter = require('fsmrouter');
    function switchTab(tabID) {
        var result = function (req, next) {
        };
        return result;
    }
    var dataRoute = FSMRouter.add({ pattern: 'db', name: 'db/index' });
    dataRoute.add({ pattern: 'open', name: '../db/start' });
    dataRoute.add({ pattern: 'create', name: '../db/create' });
    var browseRoute = dataRoute.add({ pattern: 'browse', name: '../db/browse' });
    var tableRoute = browseRoute.add({ pattern: 'table/:tableName', name: '../table' });
    tableRoute.add('design', switchTab());
    tableRoute.add('refactoring', switchTab());
    tableRoute.add('data/:tableName', switchTab());
    return FSMRouter;
});
//# sourceMappingURL=routes.js.map