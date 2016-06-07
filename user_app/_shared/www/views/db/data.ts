/**
 * Created by slanska on 2016-06-05.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var uiModule = {} as IWebixJetModule;
var viewCfg = {view: 'layout', id: 'db.browse:form'} as webix.ui.formConfig;

var app = require('app') as IWebixJetApp;
import app_cfg = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers= require('../../models/helpers');

uiModule.$ui = {view: 'template', template: 'data', id: helpers.uid(app, 'main')} as webix.ui.baseviewConfig;

export = uiModule;