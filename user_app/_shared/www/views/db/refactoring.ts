/**
 * Created by slanska on 2016-06-06.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

/*
 Webix Jet module. 2 panels. Left: file browser
 Right: list of recently opened files
 */

var app = require('app') as IWebixJetApp;
import config = require('config');
import _ = require('lodash');
import qs = require('qs');
import helpers = require('../../models/helpers');

var uiModule = {} as IWebixJetModule;

interface IRefactorActionDef
{
    group:string;
    title:string;
    action:string;
    icon:string;
}

// List of refactoring actions
var items:IRefactorActionDef[] = [
    {
        group: 'Class',
        title: 'Create class',
        action: '',
        icon: ''
    },
    {
        group: 'Class',
        title: 'Alter class',
        action: '',
        icon: ''
    },
    {
        group: 'Class',
        title: 'Drop class',
        action: '',
        icon: ''
    },
    {
        group: 'Property',
        title: 'Create property',
        action: '',
        icon: ''
    }
];

var listCfg = {view: 'unitlist', id: helpers.uid(app, 'action-list')} as webix.ui.unitlistConfig;
listCfg.uniteBy = (obj:IRefactorActionDef)=>
{
    return obj.group;
    // return `<div><h6>${obj.group}</h6></div>`;
};
listCfg.template = `<div class="webix-strong">  #title#</div>`;
listCfg.data = items;

uiModule.$ui = listCfg;

export = uiModule;