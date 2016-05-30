/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

var DBOpen = {} as IWebixJetModule;
var ui = {view: 'form'} as webix.ui.formConfig;

var app = require('app');
import config = require('config');

// list of files
var tblCfg = {view: 'datatable', id: webix.uid()} as webix.ui.datatableConfig;
tblCfg.url = '';
tblCfg.on = {
    onAfterSelect: ()=>
    {
        // Reload table
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
    tbl.load(fPath)
        .then((d)=>
        {
            var dt = d.json() as FileSys.IFileList;
            console.log(dt);
            return dt.files;
        });
}

var btnOpen = {view: 'button', id: webix.uid()} as webix.ui.buttonConfig;
btnOpen.label = 'Open';
btnOpen.click = () =>
{
    // TODO Use path from selected item
    loadFiles('');
};

ui.elements = [tblCfg, btnOpen];

DBOpen.$ui = ui;
DBOpen.$oninit = () =>
{
    loadFiles('');
};
export  = DBOpen;
