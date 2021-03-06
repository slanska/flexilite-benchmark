/**
 * Created by slanska on 2016-06-04.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'lodash'], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../typings/browser.d.ts"/>
    var _ = require('lodash');
    /*
     Generates ID for webix component in the format parent_module_name:component_id.
     This approach: 1) provides uniqueness of IDs across all components, 2) creates well-known IDs (good for automated testing, for example)
     */
    function uid(app, id) {
        // TODO
        return webix.uid();
        // var result = '';
        // if (app && app.path)
        // {
        //     _.forEach(app.path, (p)=>
        //     {
        //         if (result !== '')
        //             result += `:${p.page}`;
        //         else result += p.page;
        //     });
        // }
        // result += `:${id}`;
        // return result;
    }
    exports.uid = uid;
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