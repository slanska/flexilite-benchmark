/**
 * Created by slanska on 2016-06-05.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var app = require('app') as IWebixJetApp;
import app_cfg = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers= require('../../models/helpers');

var viewModel = {} as IWebixJetModule;
var viewCfg = {view: 'layout', id: helpers.uid(app, 'form'), template: 'data'} as webix.ui.formConfig;
viewModel.$ui = viewCfg;

viewModel.$onurlchange = (config:any, url, $scope:IWebixJetScope)=>
{
    webix.alert('data', null);
};

export = viewModel;