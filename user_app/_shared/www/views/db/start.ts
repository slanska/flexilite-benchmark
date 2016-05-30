/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>


/*
 Home page for database operations.
 Composed from 2 vertical panels. Panel 1 displays recently opened databases,
 panel 2 displays file manager view, with given root directory.
 */

import open = require( './open');
import recent = require( './recent');

var DBHome = {} as IWebixJetModule;
var ui = {view: 'layout'} as webix.ui.layoutConfig;
ui.cols = [open, recent];
DBHome.$ui = ui;
export = DBHome;