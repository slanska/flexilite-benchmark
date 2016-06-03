/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var uiModule = {} as IWebixJetModule;
var viewCfg = {view: 'form'} as webix.ui.formConfig;

var app = require('app') as IWebixJetApp;
import config = require('config');
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
    var d = qs.parse(window.atob(config[0])) as DBSys.IDBFileOpen;
    webix.alert(`${d.dir} . ${d.fileName}`, null);
};

export  = uiModule;