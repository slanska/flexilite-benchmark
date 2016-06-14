/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'config', 'lodash', 'qs', '../../models/helpers', './refactoring'], factory);
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
    var uiModule = {};
    var viewCfg = { view: 'layout', id: 'db.browse:form' };
    var app = require('app');
    var app_cfg = require('config');
    var _ = require('lodash');
    var qs = require('qs');
    var helpers = require('../../models/helpers');
    var refactoring = require('./refactoring');
    // list of files
    var tblCfg = { view: 'list', id: helpers.uid(app, 'list') };
    tblCfg.url = '';
    tblCfg.select = true;
    tblCfg.template = "#Name#";
    tblCfg.on = {
        onAfterSelect: function () {
            var tbl = $$(tblCfg.id);
            var item = tbl.getSelectedItem(false);
            if ($scope) {
                var url = helpers.encodeUrlParam({ table: item.Name });
                $scope.show("./db.data:" + url);
            }
        }
    };
    tblCfg.gravity = 0.4;
    tblCfg.select = 'row';
    var resizerCfg = { view: 'resizer', id: helpers.uid(app, 'resizer') };
    var tabsCfg = { view: 'tabview', id: helpers.uid(app, 'tabs') };
    tabsCfg.cells = [
        { header: 'Data', body: { $subview: true } },
        { header: 'SQL', body: {} },
        { header: 'Schema', body: {} },
        { header: 'Refactoring', body: refactoring }
    ];
    var toolBar = { view: 'toolbar', id: helpers.uid(app, 'toolBar') };
    toolBar.elements = [];
    toolBar.height = 40;
    viewCfg.rows = [toolBar, { cols: [tblCfg, resizerCfg, tabsCfg] }];
    var $scope = null;
    uiModule.$ui = viewCfg;
    uiModule.$oninit = function (view, $thisScope) {
        $scope = $thisScope;
        //loadFiles('');
    };
    uiModule.$onurlchange = function (config, url, scope) {
        if (_.isArray(url) && url.length > 0 && url[0].page === 'db.data') {
            var v = helpers.getParamFromUrl(url[0].params);
            if (v) {
                var tbl_args = helpers.decodeUrlParam(v);
            }
        }
        else {
            var db = helpers.decodeUrlParam(config);
            var u = app_cfg.apiUrl + "/db/list?" + qs.stringify(db);
            webix.ajax().get(u).then(function (d) {
                var data = d.json();
                var tbl = $$(tblCfg.id);
                tbl.clearAll();
                tbl.parse(data, 'json');
            });
        }
    };
    return uiModule;
});
//# sourceMappingURL=browse.js.map