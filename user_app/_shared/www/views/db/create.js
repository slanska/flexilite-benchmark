/**
 * Created by slanska on 2016-05-28.
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
    var helpers = require('../../models/helpers');
    var app = require('../../app');
    /*
     Webix Jet module. Create database.
     Has controls:
     -database file,
     -page size
     -[Copy Database] button
     -[OK] button - saves changes
     Cancel button - navigates to previous page
     */
    var DB;
    (function (DB) {
        DB.Create = {};
        var frm = { view: 'form', id: helpers.uid(app, 'form') };
        var dbFilePath = { view: 'text', id: helpers.uid(app, 'dbPath') };
        dbFilePath.label = 'Database File Path:';
        var cmbPageSize = { view: 'combo', id: helpers.uid(app, 'pagesz') };
        cmbPageSize.label = 'Page Size';
        cmbPageSize.options = [
            { id: '1024', value: '1K' },
            { id: '2048', value: '2K' },
            { id: '4096', value: '4K' },
            { id: '8192', value: '8K' }
        ];
        cmbPageSize.value = '4096';
        var btnOK = { view: 'button', id: helpers.uid(app, 'ok') };
        btnOK.label = 'OK';
        // btnOK.width = 250;
        btnOK.align = 'right';
        frm.elements = [dbFilePath, cmbPageSize, btnOK];
        DB.Create.$ui = frm;
    })(DB || (DB = {}));
    return DB.Create;
});
//# sourceMappingURL=create.js.map