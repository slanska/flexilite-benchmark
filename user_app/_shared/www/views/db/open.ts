/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

/*
 Webix Jet module. 2 panels. Left: file browser
 Right: list of recently opened databases
 */

var app = require('app') as IWebixJetApp;
var WebixApp = require('libs/fsmrouter/lib/webixRouter') as IWebixJetApp;
import config = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers = require('../../models/helpers');

var uiModule = {} as IWebixJetModule;
var viewCfg = {view: 'form'} as webix.ui.formConfig;
var layoutCfg = {rows: [viewCfg]};

// viewCfg.autoheight = false;

// list of files
var tblCfg = {view: 'datatable', id: helpers.uid(app, 'list')} as webix.ui.datatableConfig;
tblCfg.url = '';
tblCfg.on = {
    onAfterSelect: ()=>
    {
        itemSelected();
    }
};
tblCfg.autoConfig = true;
tblCfg.select = 'row';

function loadFiles(path:string)
{
    // Get selected item. If directory - load files for that directory.
    // Otherwise, open database file
    var tbl = $$(tblCfg.id) as webix.ui.datatable;

    var fPath = `${config.apiUrl}/filesys`;
    if (!_.isEmpty(path))
        fPath += `?${qs.stringify({path: path})}`;
    webix.ajax().get(fPath).then((d)=>
    {
        let data = d.json() as FileSys.IFileList;
        tbl.clearAll();
        tbl.parse(data.files, 'json');
    });
}

function openDatabaseFile(dirName:string, fileName:string)
{
    var p:DBSys.IDBFileOpen = {dir: dirName, fileName: fileName};
    WebixApp.show(`browse`, p);
}

function itemSelected()
{
    // TODO Use path from selected item
    var tbl = $$(tblCfg.id) as webix.ui.datatable;
    var item:FileSys.IFileStats = tbl.getSelectedItem() as any;

    switch (item.type)
    {
        case FileSys.FileType.Directory:
        case FileSys.FileType.ParentDirectory:
            // Navigate to another folder
            var dir = item.directoryName;
            var fn = item.name;
            if (!_.isEmpty(dir))
                fn = dir + '/' + fn;
            loadFiles(fn);
            break;

        case FileSys.FileType.File:
            // Open database
            openDatabaseFile(item.directoryName, item.name);
            break;
    }
}

viewCfg.elements = [tblCfg];

uiModule.$ui = layoutCfg;
uiModule.$oninit = () =>
{
    loadFiles('');
};

export  = uiModule;
