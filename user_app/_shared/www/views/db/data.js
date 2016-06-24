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
    var app = require('app');
    var helpers = require('../../models/helpers');
    var viewModel = {};
    var viewCfg = { view: 'layout', id: helpers.uid(app, 'form'), template: 'data' };
    viewModel.$ui = viewCfg;
    viewModel.$onurlchange = function (config, url, $scope) {
        webix.alert('data', null);
    };
    return viewModel;
});
//# sourceMappingURL=data.js.map