/**
 * Created by slanska on 2016-06-25.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'fsmrouter', 'libs/fsmrouter/lib/webixRouter'], factory);
    }
})(function (require, exports) {
    "use strict";
    var FSMRouter = require('fsmrouter');
    var WebixApp = require('libs/fsmrouter/lib/webixRouter');
    console.log(WebixApp);
    // function loadWebixModule(path?:string):FSMCallback
    // {
    //     var result:FSMCallback = (req:fsmRequest, next?:FSMCallback):any=>
    //     {
    //         var pp = new Promise((resolve, reject) =>
    //         {
    //             var modulePath = FSMRouter.join('views', path);
    //             require([modulePath], (m:IWebixJetModule)=>
    //             {
    //                 var ui = webix.ui(m.$ui);
    //
    //                 if (m.$oninit)
    //                     m.$oninit(ui, null);
    //
    //                 // if (m.$)
    //
    //                 resolve(true);
    //             });
    //         });
    //         return pp;
    //     };
    //     return result;
    // }
    function switchTab(tabID) {
        var result = function (req, next) {
        };
        return result;
    }
    var dataRoute = FSMRouter.add({ pattern: 'db', name: 'db/index' });
    dataRoute.add({ pattern: 'open', name: '../db/start' });
    dataRoute.add({ pattern: 'create', name: '../db/create' });
    var browseRoute = dataRoute.add({ pattern: 'browse', name: '../db/browse' });
    var tableRoute = browseRoute.add({ pattern: 'table/:tableName', name: '../db/table' });
    tableRoute.add('design', switchTab());
    tableRoute.add('refactoring', switchTab());
    tableRoute.add('data/:tableName', switchTab());
    return FSMRouter;
});
//# sourceMappingURL=routes.js.map