/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="../../../../../typings/browser.d.ts"/>

namespace DB
{
    export var Create = {} as IWebixJetModule;

    var ui = {view: 'template'} as webix.ui.templateConfig;
    ui.template = `<strong style="background-color: red; color: whitesmoke;">DB Create</strong>`;

    Create.$ui = ui;
}

export = DB.Create;
