/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

import helpers = require('../../models/helpers');
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
namespace DB
{
    export var Create = {} as IWebixJetModule;

    var frm = {view: 'form', id: helpers.uid(app, 'form')} as webix.ui.formConfig;
    var dbFilePath = {view: 'text', id: helpers.uid(app, 'dbPath')} as webix.ui.textConfig;
    dbFilePath.label = 'Database File Path:';

    var cmbPageSize = {view: 'combo', id: helpers.uid(app, 'pagesz')} as webix.ui.comboConfig;
    cmbPageSize.label = 'Page Size';
    cmbPageSize.options = [
        {id: '1024', value: '1K'},
        {id: '2048', value: '2K'},
        {id: '4096', value: '4K'},
        {id: '8192', value: '8K'}
    ];
    cmbPageSize.value = '4096';

    var btnOK = {view: 'button', id: helpers.uid(app, 'ok')} as webix.ui.buttonConfig;
    btnOK.label = 'OK';

    frm.elements = [dbFilePath, cmbPageSize, btnOK];

    Create.$ui = frm;
}

export = DB.Create;
