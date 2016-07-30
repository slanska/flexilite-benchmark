/**
 * Created by slanska on 2016-06-06.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

/*
 Webix Jet module.
 */

var app = require('app') as IWebixJetApp;
import config = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers = require('../../models/helpers');

var uiModule = {} as IWebixJetModule;

declare type RefactorDef = {title:string, description?:string, icon?:string,
    actions:{title:string, description?:string, action:string}[]}[];
interface IRefactorActionDef
{
    group:string;
    title:string;
    action:string;
    icon:string;
}

var items:RefactorDef = [
    {
        title: 'Classes', actions: [
        {title: 'Create', action: 'createClass'},
        {title: 'Alter', action: 'alterClass'},
        {title: 'Drop', action: 'dropClass'},
    ]
    },
    {
        title: 'Properties', actions: [
        {title: 'Create', action: 'createProp'},
        {title: 'Alter', action: 'alterProp'},
        {title: 'Drop', action: 'dropProp'},
        {title: 'To Object', action: 'propToObj'},
        {title: 'Split', action: 'splitProp'},
        {title: 'Merge', action: 'mergeProp'}
    ]
    },
    {
        title: 'Object', actions: [
        {title: 'To Properties', action: 'objToProps'},
        {title: 'Move to Another Class', action: 'changeClass'},
        {title: 'Remove Duplicates', action: 'removeDups'}
    ]
    },
    {
        title: 'Structural', actions: [
        {title: 'Split', action: 'structSplit'},
        {title: 'Merge', action: 'structMerge'}
    ]
    },
    {
        title: 'Miscellaneous', actions: [
        {title: 'Import Data', action: 'importData'}
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

var refactoringDiv = _.template(`<div class="container"> <div class="bs-component">
<% _.forEach(actionGroups, function(ag) {%>
<div class="panel panel-primary col-lg-4 col-sm-12 col-md-6"> 
<div class="panel-heading">
                  <h3 class="panel-title"><%= ag.title %></h3>
                </div>
                <% _.forEach(ag.actions, function(a) {%>
                <div class="list-group">
                <a onclick="FSMRouter.navigate('<%= a.action %>')" class="list-group-item">
                  <h4 class="list-group-item-heading"><%= a.title%></h4>
                  <p class="list-group-item-text"><%= a.description %></p>
                </a>
              
              </div>
                <% }); %>
              </div>
              <% }); %>
              </div>
              </div>
              `)({actionGroups: items});

// var listCfg = {view: 'unitlist', id: helpers.uid(app, 'action-list')} as webix.ui.unitlistConfig;
// listCfg.uniteBy = (obj:IRefactorActionDef)=>
// {
//     return obj.group;
// };

uiModule.$ui = {view: 'template', scroll: 'y', template: refactoringDiv} as webix.ui.templateConfig;

export = uiModule;