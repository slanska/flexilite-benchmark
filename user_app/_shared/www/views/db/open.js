/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'config'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    var DBOpen = {};
    var ui = { view: 'form' };
    var app = require('app');
    var config = require('config');
    // list of files
    var tblCfg = { view: 'datatable', id: webix.uid() };
    tblCfg.url = '';
    tblCfg.on = {
        onAfterSelect: function () {
            // Reload table
        }
    };
    tblCfg.autoConfig = true;
    tblCfg.select = 'row';
    function loadFiles(path) {
        // Get selected item. If directory - load files for that directory.
        // Otherwise, open database file
        var tbl = $$(tblCfg.id);
        var fPath = config.apiUrl + "/filesys";
        tbl.load(fPath)
            .then(function (d) {
            var dt = d.json();
            console.log(dt);
            return dt.files;
        });
    }
    var btnOpen = { view: 'button', id: webix.uid() };
    btnOpen.label = 'Open';
    btnOpen.click = function () {
        // TODO Use path from selected item
        loadFiles('');
    };
    ui.elements = [tblCfg, btnOpen];
    DBOpen.$ui = ui;
    DBOpen.$oninit = function () {
        loadFiles('');
    };
    return DBOpen;
});
//# sourceMappingURL=open.js.map