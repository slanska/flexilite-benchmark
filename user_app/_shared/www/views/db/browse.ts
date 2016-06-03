/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var uiModule = {} as IWebixJetModule;
var viewCfg = {view: 'form'} as webix.ui.formConfig;

var app = require('app') as IWebixJetApp;
import app_cfg = require('config');
import _ = require('lodash');
import qs = require('qs');

// list of files
var tblCfg = {view: 'datatable', id: webix.uid()} as webix.ui.datatableConfig;
tblCfg.url = '';
tblCfg.on = {
    onAfterSelect: ()=>
    {
        //itemSelected();
    }
};
tblCfg.autoConfig = true;
tblCfg.select = 'row';
viewCfg.elements = [tblCfg];

uiModule.$ui = viewCfg;
uiModule.$oninit = () =>
{
    //loadFiles('');
};

uiModule.$onurlchange = (config, url, scope)=>
{
    if (_.isArray(config))
    {
        var db = window.atob(config[0]);
        var u = `${app_cfg.apiUrl}/db/tables?${db}`;
        webix.ajax().get(u).then((d)=>
        {
            var data = d.json();
            let tbl = $$(tblCfg.id) as webix.ui.datatable;
            tbl.parse(data, 'json');
        });
    }
};

export  = uiModule;