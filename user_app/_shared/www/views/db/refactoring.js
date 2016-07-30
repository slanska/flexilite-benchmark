/**
 * Created by slanska on 2016-06-06.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'lodash'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    /*
     Webix Jet module.
     */
    var app = require('app');
    var _ = require('lodash');
    var uiModule = {};
    var items = [
        {
            title: 'Classes', actions: [
                { title: 'Create', action: 'createClass' },
                { title: 'Alter', action: 'alterClass' },
                { title: 'Drop', action: 'dropClass' },
            ]
        },
        {
            title: 'Properties', actions: [
                { title: 'Create', action: 'createProp' },
                { title: 'Alter', action: 'alterProp' },
                { title: 'Drop', action: 'dropProp' },
                { title: 'To Object', action: 'propToObj' },
                { title: 'Split', action: 'splitProp' },
                { title: 'Merge', action: 'mergeProp' }
            ]
        },
        {
            title: 'Object', actions: [
                { title: 'To Properties', action: 'objToProps' },
                { title: 'Move to Another Class', action: 'changeClass' },
                { title: 'Remove Duplicates', action: 'removeDups' }
            ]
        },
        {
            title: 'Structural', actions: [
                { title: 'Split', action: 'structSplit' },
                { title: 'Merge', action: 'structMerge' }
            ]
        },
        {
            title: 'Miscellaneous', actions: [
                { title: 'Import Data', action: 'importData' }
            ]
        }
    ];
    /*
    
     Properties to object
    
     Object to properties
    
     Structural merge
    
     Structural split
    
     Move to another class
    
     Remove duplicated objects
    
     Split property
    
     Merge properties
    
     Alter property
    
     Drop property
    
     Get Invalid Objects
    
     Import from database
    
     */
    var refactoringDiv = _.template("<div class=\"container\"> <div class=\"bs-component\">\n<% _.forEach(actionGroups, function(ag) {%>\n<div class=\"panel panel-primary col-lg-4 col-sm-12 col-md-6\"> \n<div class=\"panel-heading\">\n                  <h3 class=\"panel-title\"><%= ag.title %></h3>\n                </div>\n                <% _.forEach(ag.actions, function(a) {%>\n                <div class=\"list-group\">\n                <a onclick=\"FSMRouter.navigate('<%= a.action %>')\" class=\"list-group-item\">\n                  <h4 class=\"list-group-item-heading\"><%= a.title%></h4>\n                  <p class=\"list-group-item-text\"><%= a.description %></p>\n                </a>\n              \n              </div>\n                <% }); %>\n              </div>\n              <% }); %>\n              </div>\n              </div>\n              ")({ actionGroups: items });
    // var listCfg = {view: 'unitlist', id: helpers.uid(app, 'action-list')} as webix.ui.unitlistConfig;
    // listCfg.uniteBy = (obj:IRefactorActionDef)=>
    // {
    //     return obj.group;
    // };
    uiModule.$ui = { view: 'template', scroll: 'y', template: refactoringDiv };
    return uiModule;
});
//# sourceMappingURL=refactoring.js.map