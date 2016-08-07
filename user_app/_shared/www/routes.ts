/**
 * Created by slanska on 2016-06-25.
 */

import FSMRouter = require('fsmrouter');
import WebixApp = require('libs/fsmrouter/lib/webixRouter');

function switchTab(tabControlID?:string, tabPageID?:string):FSMCallback
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

tableRoute.add('design', switchTab());
var refactRoute = tableRoute.add('refactoring', switchTab());
tableRoute.add('data/:tableName', switchTab());

dataRoute.add({pattern: 'createClass', name: '../db/refactor/createClass'});
dataRoute.add({pattern: 'alterClass', name: '../db/refactor/alterClass'});
dataRoute.add({pattern: 'dropClass', name: '../db/refactor/dropClass'});
dataRoute.add({pattern: 'createProp', name: '../db/refactor/createProp'});
dataRoute.add({pattern: 'alterProp', name: '../db/refactor/alterProp'});
dataRoute.add({pattern: 'dropProp', name: '../db/refactor/dropProp'});
dataRoute.add({pattern: 'propToObj', name: '../db/refactor/propToObj'});
dataRoute.add({pattern: 'splitProp', name: '../db/refactor/splitProp'});
dataRoute.add({pattern: 'mergeProp', name: '../db/refactor/mergeProp'});
dataRoute.add({pattern: 'objToProps', name: '../db/refactor/objToProps'});
dataRoute.add({pattern: 'changeClass', name: '../db/refactor/changeClass'});
dataRoute.add({pattern: 'removeDups', name: '../db/refactor/removeDups'});
dataRoute.add({pattern: 'structMerge', name: '../db/refactor/structMerge'});
dataRoute.add({pattern: 'importData', name: '../db/refactor/importData'});

// TODO ???
export = FSMRouter;