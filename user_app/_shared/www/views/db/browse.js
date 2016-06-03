/**
 * Created by slanska on 2016-05-28.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'qs'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    var uiModule = {};
    var viewCfg = { view: 'form' };
    var app = require('app');
    var qs = require('qs');
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
        var d = qs.parse(window.atob(config[0]));
        webix.alert(d.dir + " . " + d.fileName, null);
    };
    return uiModule;
});
//# sourceMappingURL=browse.js.map