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
    var uiModule = {};
    var viewCfg = { view: 'form' };
    var app = require('app');
    var app_cfg = require('config');
    var _ = require('lodash');
    // list of files
    var tblCfg = { view: 'datatable', id: webix.uid() };
    tblCfg.url = '';
    tblCfg.on = {
        onAfterSelect: function () {
            //itemSelected();
        }
    };
    tblCfg.autoConfig = true;
    tblCfg.select = 'row';
    viewCfg.elements = [tblCfg];
    uiModule.$ui = viewCfg;
    uiModule.$oninit = function () {
        //loadFiles('');
    };
    uiModule.$onurlchange = function (config, url, scope) {
        if (_.isArray(config)) {
            var db = window.atob(config[0]);
            var u = app_cfg.apiUrl + "/db/tables?" + db;
            webix.ajax().get(u).then(function (d) {
                var data = d.json();
                var tbl = $$(tblCfg.id);
                tbl.parse(data, 'json');
            });
        }
    };
    return uiModule;
});
//# sourceMappingURL=browse.js.map