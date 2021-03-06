/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

/*
 This UI module is a hub for database management.
 It has 2 panels: left-side panel displays list of tables.
 Selecting table in this list loads table data in the right panel.
 This panel has:
 1) [+ Add table] button
 2) Auto-incremental search
 3) list of (filtered) Flexilite tables

 Right panel is tab control with the following tabs:
 - Data: table records
 - SQL: run arbitrary SQL
 - Schema: list of columns
 - Refactoring: all actions for refactoring (including DB level)

 Menu has the following items:
 - New Table
 - Database Info (including memory usage and database handle)

 */

var app = require('app') as IWebixJetApp;
import app_cfg = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers= require('../../models/helpers');
import refactoring= require('./refactoring');

var uiModule = {} as IWebixJetModule;
var viewCfg = {view: 'layout', id: helpers.uid(app, 'form')} as webix.ui.layoutConfig;
viewCfg.height = 500; // TODO Needed?

// list of files
var tblCfg = {view: 'list', id: helpers.uid(app, 'list')} as webix.ui.listConfig;
tblCfg.url = '';
tblCfg.select = true;
tblCfg.template = `#Name#`;
tblCfg.on = {
    onAfterSelect: ()=>
    {
        var tbl = $$(tblCfg.id) as webix.ui.list;
        var item = tbl.getSelectedItem(false) as {Name:string};
        app.show(`./data/${item}`);
    }
};

tblCfg.gravity = 0.4;
tblCfg.select = 'row';

var resizerCfg = {view: 'resizer', id: helpers.uid(app, 'resizer')} as webix.ui.resizerConfig;
var tabsCfg = {view: 'tabview', id: helpers.uid(app, 'tabs')} as webix.ui.tabviewConfig;
tabsCfg.cells = [
    {header: 'Data', body: {}},
    {header: 'SQL', body: {}},
    {header: 'Schema', body: {}},
    {header: 'Refactoring', body: refactoring}
];

var toolBar = {view: 'toolbar', id: helpers.uid(app, 'toolBar')} as webix.ui.toolbarConfig;
toolBar.elements = [];
toolBar.height = 40;

viewCfg.rows = [toolBar, {cols: [tblCfg, resizerCfg, tabsCfg]}];

// var $scope:IWebixJetScope = null;
uiModule.$ui = viewCfg;
uiModule.$oninit = (view:webix.ui.baseview, $thisScope:IWebixJetScope) =>
{
    // Register routes for tabs switching
};

uiModule.$onurlchange = (config, query, scope:IWebixJetScope)=>
{
    var u = `${app_cfg.apiUrl}/db/list?${qs.stringify(query)}`;
    webix.ajax().get(u).then((d)=>
    {
        var data = d.json();
        let tbl = $$(tblCfg.id) as webix.ui.list;
        tbl.clearAll();
        tbl.parse(data, 'json');
    });
};

export  = uiModule;