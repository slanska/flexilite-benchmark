/**
 * Created by slanska on 2016-06-04.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'lodash', 'qs'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../typings/browser.d.ts"/>
    var _ = require('lodash');
    var qs = require('qs');
    /*
     Generates ID for webix component in the format parent_module_name:component_id.
     This approach: 1) provides uniqueness of IDs across all components, 2) creates well-known IDs (good for automated testing, for example)
     */
    function uid(app, id) {
        var result = '';
        if (app && app.path) {
            _.forEach(app.path, function (p) {
                if (result !== '')
                    result += ":" + p.page;
                else
                    result += p.page;
            });
        }
        result += ":" + id;
        return result;
    }
    exports.uid = uid;
    /*
     Encodes an object into base64 string.
     Used for passing parameters in URL
     */
    // TODO Move to shared folder
    function encodeUrlParam(params) {
        var result = window.btoa(qs.stringify(params));
        return result;
    }
    exports.encodeUrlParam = encodeUrlParam;
    /*
     Decodes base64-string to an object.
     Used for passing parameters in URL.
     */
    function decodeUrlParam(urlParam) {
        var v = getParamFromUrl(urlParam);
        var result = qs.parse(window.atob(v));
        return result;
    }
    exports.decodeUrlParam = decodeUrlParam;
    function getParamFromUrl(urlParam) {
        var v;
        if (_.isString(urlParam))
            v = urlParam;
        else if (_.isArray(urlParam)) {
            v = urlParam[0];
        }
        else {
            v = Object.keys(urlParam)[0];
        }
        return v;
    }
    exports.getParamFromUrl = getParamFromUrl;
});
//# sourceMappingURL=helpers.js.map