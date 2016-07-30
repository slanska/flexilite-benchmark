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

tableRoute.add('design', switchTab());
var refactRoute = tableRoute.add('refactoring', switchTab());
tableRoute.add('data/:tableName', switchTab());

tableRoute.add({pattern: 'createClass', name: '../db/refactor/createClass'});
tableRoute.add({pattern: 'alterClass', name: '../db/refactor/alterClass'});
tableRoute.add({pattern: 'dropClass', name: '../db/refactor/dropClass'});
tableRoute.add({pattern: 'createProp', name: '../db/refactor/createProp'});
tableRoute.add({pattern: 'alterProp', name: '../db/refactor/alterProp'});
tableRoute.add({pattern: 'dropProp', name: '../db/refactor/dropProp'});
tableRoute.add({pattern: 'propToObj', name: '../db/refactor/propToObj'});
tableRoute.add({pattern: 'splitProp', name: '../db/refactor/splitProp'});
tableRoute.add({pattern: 'mergeProp', name: '../db/refactor/mergeProp'});
tableRoute.add({pattern: 'objToProps', name: '../db/refactor/objToProps'});
tableRoute.add({pattern: 'changeClass', name: '../db/refactor/changeClass'});
tableRoute.add({pattern: 'removeDups', name: '../db/refactor/removeDups'});
tableRoute.add({pattern: 'structMerge', name: '../db/refactor/structMerge'});
tableRoute.add({pattern: 'importData', name: '../db/refactor/importData'});

// TODO ???
export = FSMRouter;