/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'config', 'lodash'], factory);
    }
})(function (require, exports) {
    "use strict";
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
    var uiModule = {};
    var viewCfg = { view: 'layout', id: 'db.browse:form' };
    var app = require('app');
    var app_cfg = require('config');
    var _ = require('lodash');
    // list of files
    var tblCfg = { view: 'list', id: 'db.browse:list' };
    tblCfg.url = '';
    tblCfg.select = true;
    tblCfg.template = "#name#";
    tblCfg.on = {
        onAfterSelect: function () {
            //itemSelected();
        }
    };
    tblCfg.gravity = 0.3;
    tblCfg.select = 'row';
    var resizerCfg = { view: 'resizer', id: 'db.browse:resizer' };
    var tabsCfg = { view: 'tabview', id: 'db.browse:tabs' };
    tabsCfg.cells = [
        { header: 'Data', body: {} },
        { header: 'SQL', body: {} },
        { header: 'Schema', body: {} },
        { header: 'Refactoring', body: {} }
    ];
    viewCfg.cols = [tblCfg, resizerCfg, tabsCfg];
    uiModule.$ui = viewCfg;
    uiModule.$oninit = function (view, $scope) {
        //loadFiles('');
    };
    uiModule.$onurlchange = function (config, url, scope) {
        var v;
        if (_.isArray(config)) {
            v = config[0];
        }
        else {
            v = Object.keys(config)[0];
        }
        var db = window.atob(v);
        var u = app_cfg.apiUrl + "/db/list?" + db;
        webix.ajax().get(u).then(function (d) {
            var data = d.json();
            var tbl = $$(tblCfg.id);
            tbl.parse(data, 'json');
        });
    };
    return uiModule;
});
//# sourceMappingURL=browse.js.map