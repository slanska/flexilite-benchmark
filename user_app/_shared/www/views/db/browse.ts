/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

/*
 This UI module is a hub for database management.
 It has 2 panels: left-side panel displays list of tables. Selecting table in this list loads table data in the right panel.
 Right panel is tab control with the following tabs:
 - Data: table records
 - SQL: run arbitrary SQL
 - Schema: list of columns
 - Refactoring: all actions for refactoring (including DB level)

 Menu has the following items:
 - New Table
 - Database Info (including memory usage and database handle)

 */

var uiModule = {} as IWebixJetModule;
var viewCfg = {view: 'layout', id: 'db.browse:form'} as webix.ui.formConfig;

var app = require('app') as IWebixJetApp;
import app_cfg = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers= require('../../models/helpers');
import refactoring= require('./refactoring');

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
        if ($scope)
        {
            $scope.show('./db.data');
        }

    }
};

tblCfg.gravity = 0.4;
tblCfg.select = 'row';

var resizerCfg = {view: 'resizer', id: helpers.uid(app, 'resizer')} as webix.ui.resizerConfig;
var tabsCfg = {view: 'tabview', id: helpers.uid(app, 'tabs')} as webix.ui.tabviewConfig;
tabsCfg.cells = [
    {header: 'Data', body: {$subview: true}},
    {header: 'SQL', body: {}},
    {header: 'Schema', body: {}},
    {header: 'Refactoring', body: refactoring}
];

viewCfg.cols = [tblCfg, resizerCfg, tabsCfg];

var $scope:IWebixJetScope = null;
uiModule.$ui = viewCfg;
uiModule.$oninit = (view:webix.ui.baseview, $thisScope:IWebixJetScope) =>
{
    $scope = $thisScope;
    //loadFiles('');
};

uiModule.$onurlchange = (config, url, scope:IWebixJetScope)=>
{
    var v;

    if (_.isArray(config))
    {
        v = config[0];
    }
    else
    {
        v = Object.keys(config)[0];
    }

    var db = window.atob(v);
    var u = `${app_cfg.apiUrl}/db/list?${db}`;
    webix.ajax().get(u).then((d)=>
    {
        var data = d.json();
        let tbl = $$(tblCfg.id) as webix.ui.list;
        tbl.clearAll();
        tbl.parse(data, 'json');
    });
};

export  = uiModule;