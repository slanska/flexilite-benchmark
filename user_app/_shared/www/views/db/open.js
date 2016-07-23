/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'config', 'lodash', 'qs', '../../models/helpers'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    /*
     Webix Jet module. 2 panels. Left: file browser
     Right: list of recently opened databases
     */
    var app = require('app');
    var WebixApp = require('libs/fsmrouter/lib/webixRouter');
    var config = require('config');
    var _ = require('lodash');
    var qs = require('qs');
    var helpers = require('../../models/helpers');
    var uiModule = {};
    var viewCfg = { view: 'form' };
    var layoutCfg = { rows: [viewCfg] };
    // viewCfg.autoheight = false;
    // list of files
    var tblCfg = { view: 'datatable', id: helpers.uid(app, 'list') };
    tblCfg.url = '';
    tblCfg.on = {
        onAfterSelect: function () {
            itemSelected();
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
            tbl.clearAll();
            tbl.parse(data.files, 'json');
        });
    }
    function openDatabaseFile(dirName, fileName) {
        var p = { dir: dirName, fileName: fileName };
        WebixApp.show("browse", p);
    }
    function itemSelected() {
        // TODO Use path from selected item
        var tbl = $$(tblCfg.id);
        var item = tbl.getSelectedItem();
        switch (item.type) {
            case 1 /* Directory */:
            case 0 /* ParentDirectory */:
                // Navigate to another folder
                var dir = item.directoryName;
                var fn = item.name;
                if (!_.isEmpty(dir))
                    fn = dir + '/' + fn;
                loadFiles(fn);
                break;
            case 2 /* File */:
                // Open database
                openDatabaseFile(item.directoryName, item.name);
                break;
        }
    }
    viewCfg.elements = [tblCfg];
    uiModule.$ui = layoutCfg;
    uiModule.$oninit = function () {
        loadFiles('');
    };
    return uiModule;
});
//# sourceMappingURL=open.js.map