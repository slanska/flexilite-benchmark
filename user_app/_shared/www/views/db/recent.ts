/**
 * Created by slanska on 2016-05-29.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var DBRecent = {} as IWebixJetModule;
var form = {view: 'form'} as webix.ui.formConfig;
form.elements = [{view: 'button', label: 'Select'}];

form.autoheight = false;
var ui = {rows: [form]};
DBRecent.$ui = ui;
export  = DBRecent;