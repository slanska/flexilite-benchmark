/**
 * Created by slanska on 2016-05-28.
 */


///<reference path="../../../../../typings/browser.d.ts"/>

namespace DB
{
    export var Create = {} as IWebixJetModule;
    var ui = {view: 'header'} as webix.ui.templateConfig;
    ui.template = `DB Create`;
    Create.$ui = ui;
}

export = DB.Create;
