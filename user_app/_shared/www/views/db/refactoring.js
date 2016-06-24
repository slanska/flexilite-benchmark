/**
 * Created by slanska on 2016-06-06.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../../models/helpers'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../../typings/browser.d.ts"/>
    /*
     Webix Jet module. 2 panels. Left: file browser
     Right: list of recently opened files
     */
    var app = require('app');
    var helpers = require('../../models/helpers');
    var uiModule = {};
    // List of refactoring actions
    var items = [
        {
            group: 'Class',
            title: 'Create class',
            action: '',
            icon: ''
        },
        {
            group: 'Class',
            title: 'Alter class',
            action: '',
            icon: ''
        },
        {
            group: 'Class',
            title: 'Drop class',
            action: '',
            icon: ''
        },
        {
            group: 'Property',
            title: 'Create property',
            action: '',
            icon: ''
        }
    ];
    var listCfg = { view: 'unitlist', id: helpers.uid(app, 'action-list') };
    listCfg.uniteBy = function (obj) {
        return obj.group;
    };
    listCfg.template = "<div class=\"flex_tmp\"> \n    <div class=\"item\"> <div class=\"text\">#title#</div>\n    </div></div>";
    listCfg.data = items;
    uiModule.$ui = listCfg;
    return uiModule;
});
//# sourceMappingURL=refactoring.js.map