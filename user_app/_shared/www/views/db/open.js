/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'config', 'lodash', 'qs'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    var DBOpen = {};
    var ui = { view: 'form' };
    var app = require('app');
    var config = require('config');
    var _ = require('lodash');
    var qs = require('qs');
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
        if (!_.isEmpty(path))
            fPath += "?" + qs.stringify({ path: path });
        webix.ajax().get(fPath).then(function (d) {
            var data = d.json();
            tbl.parse(data.files, 'json');
        });
        // tbl.load(fPath)
        //     .then((d)=>
        //     {
        //         var dt = d.json() as FileSys.IFileList;
        //         console.log(dt);
        //         return dt.files;
        //     });
    }
    var btnOpen = { view: 'button', id: webix.uid() };
    btnOpen.label = 'Open';
    btnOpen.click = function () {
        // TODO Use path from selected item
        var tbl = $$(tblCfg.id);
        var item = tbl.getSelectedItem();
        loadFiles(item.name);
    };
    ui.elements = [tblCfg, btnOpen];
    DBOpen.$ui = ui;
    DBOpen.$oninit = function () {
        loadFiles('');
    };
    return DBOpen;
});
//# sourceMappingURL=open.js.map