/**
 * Created by slanska on 2016-06-05.
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
    var uiModule = {};
    var viewCfg = { view: 'layout', id: 'db.browse:form' };
    var app = require('app');
    var helpers = require('../../models/helpers');
    uiModule.$ui = { view: 'template', template: 'data', id: helpers.uid(app, 'main') };
    return uiModule;
});
//# sourceMappingURL=data.js.map