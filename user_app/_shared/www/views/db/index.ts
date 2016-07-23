/**
 * Created by slanska on 2016-07-23.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var DBHome = {} as IWebixJetModule;
var ui = {view: 'layout'} as webix.ui.layoutConfig;

// TODO Menu

ui.rows = [{gravity: 0.1}, {$subview: true}, {gravity: 0.1}];
DBHome.$ui = ui;
export = DBHome;