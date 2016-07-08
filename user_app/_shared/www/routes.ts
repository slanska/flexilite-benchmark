/**
 * Created by slanska on 2016-06-25.
 */

///<reference path="../../../typings/browser.d.ts"/>

import FSMRouter = require('fsmrouter');

function loadWebixModule(path?:string):FSMCallback
{
    var result:FSMCallback = (req:fsmRequest, next?:FSMCallback):any=>
    {
        var pp = new Promise((resolve, reject) =>
        {
            var modulePath = FSMRouter.join('views', path);
            require([modulePath], (m:IWebixJetModule)=>
            {
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

function switchTab(tabID?:string):FSMCallback
{
    var result = (req:fsmRequest, next?:FSMCallback):any=>
    {

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
// browseRoute.add('tabledesign', switchTab());

export = FSMRouter;