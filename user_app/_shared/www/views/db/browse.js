/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'config', 'qs', '../../models/helpers', './refactoring'], factory);
    }
})(function (require, exports) {
    "use strict";
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
    var app = require('app');
    var app_cfg = require('config');
    var qs = require('qs');
    var helpers = require('../../models/helpers');
    var refactoring = require('./refactoring');
    var uiModule = {};
    var viewCfg = { view: 'layout', id: helpers.uid(app, 'form') };
    viewCfg.height = 500; // TODO Needed?
    // list of files
    var tblCfg = { view: 'list', id: helpers.uid(app, 'list') };
    tblCfg.url = '';
    tblCfg.select = true;
    tblCfg.template = "#Name#";
    tblCfg.on = {
        onAfterSelect: function () {
            var tbl = $$(tblCfg.id);
            var item = tbl.getSelectedItem(false);
            app.show("./data/" + item);
        }
    };
    tblCfg.gravity = 0.4;
    tblCfg.select = 'row';
    var resizerCfg = { view: 'resizer', id: helpers.uid(app, 'resizer') };
    var tabsCfg = { view: 'tabview', id: helpers.uid(app, 'tabs') };
    tabsCfg.cells = [
        { header: 'Data', body: {} },
        { header: 'SQL', body: {} },
        { header: 'Schema', body: {} },
        { header: 'Refactoring', body: refactoring }
    ];
    var toolBar = { view: 'toolbar', id: helpers.uid(app, 'toolBar') };
    toolBar.elements = [];
    toolBar.height = 40;
    viewCfg.rows = [toolBar, { cols: [tblCfg, resizerCfg, tabsCfg] }];
    // var $scope:IWebixJetScope = null;
    uiModule.$ui = viewCfg;
    uiModule.$oninit = function (view, $thisScope) {
        // Register routes for tabs switching
    };
    uiModule.$onurlchange = function (config, query, scope) {
        var u = app_cfg.apiUrl + "/db/list?" + qs.stringify(query);
        webix.ajax().get(u).then(function (d) {
            var data = d.json();
            var tbl = $$(tblCfg.id);
            tbl.clearAll();
            tbl.parse(data, 'json');
        });
    };
    return uiModule;
});
//# sourceMappingURL=browse.js.map