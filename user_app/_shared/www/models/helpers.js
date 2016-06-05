/**
 * Created by slanska on 2016-06-04.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    ///<reference path="../../../../typings/browser.d.ts"/>
    /*
     Generates ID for webix component in the format parent_module_name:component_id.
     This approach: 1) provides uniqueness of IDs across all components, 2) creates well-known IDs (good for automated testing, for example)
     */
    function uid($scope, id) {
        var result = id;
        var p = $scope;
        while (p) {
            result = p.name + ":" + result;
            p = p.parent;
        }
        return result;
    }
    exports.uid = uid;
});
//# sourceMappingURL=helpers.js.map