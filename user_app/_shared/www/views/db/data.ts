/**
 * Created by slanska on 2016-06-05.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var viewModel = {} as IWebixJetModule;
var viewCfg = {view: 'layout', id: helpers.uid(app, 'main'), template: 'data'} as webix.ui.formConfig;

var app = require('app') as IWebixJetApp;
import app_cfg = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers= require('../../models/helpers');

viewModel.$ui = viewCfg;

viewModel.$onurlchange = (config:any, url, $scope:IWebixJetScope)=>
{
//
};

export = viewModel;