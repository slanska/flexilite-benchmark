/**
 * Created by slanska on 2016-05-29.
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
    var config = {
        rootPath: '/'
    };
    return config;
});
//# sourceMappingURL=config.js.map