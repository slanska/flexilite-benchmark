/**
 * Created by slanska on 2016-06-25.
 */

import FSMRouter = require('fsmrouter');
import WebixApp = require('libs/fsmrouter/lib/webixRouter');

function switchTab(tabID?:string):FSMCallback
{
    var result = (req:fsmRequest, next?:FSMCallback):any=>
    {

    };
    return result;
}

var dataRoute = FSMRouter.add({pattern: 'db', name: 'db/index'});
dataRoute.add({pattern: 'open', name: '../db/start'});
dataRoute.add({pattern: 'create', name: '../db/create'});
var browseRoute = dataRoute.add({pattern: 'browse', name: '../db/browse'});
var tableRoute = browseRoute.add({pattern: 'table/:tableName', name: '../table'});

tableRoute.add('design',  switchTab());
tableRoute.add('refactoring', switchTab());
tableRoute.add('data/:tableName', switchTab());

// TODO ???
export = FSMRouter;