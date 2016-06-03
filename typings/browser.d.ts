/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="./webix/webix.d.ts"/>
///<reference path="./shared.d.ts"/>
///<reference path="./requirejs/require.d.ts"/>

declare interface IWebixJetApp
{
    config: {
        id: string,
        name: string,
        version: string,
        debug: boolean,
        start: string
    };

    attachEvent(eventName:string, handler: Function);
    on(eventName:string, handler: Function);

    callEvent(eventName:string, params: any[]);
    trigger(eventName:string, params: any[]);

    /*

     */
    show(viewModule: string);
}

declare interface IWebixJetScope
{
    show(url:string);
    on(instance:any, eventName:string, handler:Function);
    $layout: boolean;
    fullname:string;
    index:number;
    module: IWebixJetModule;
    name:string;
    parent:IWebixJetScope;
    root: any; // TODO result
    sub(ui, name:string, stack);
    ui(module:IWebixJetModule, container);
}

/*
 Declares contract for webix-jet viewmodule
 */
declare interface IWebixJetModule
{
    $ui:webix.ui.baseviewConfig;
    $oninit?:(view:webix.ui.baseview, $scope:IWebixJetScope)=>void;
    $onurlchange?:(config:any, url, $scope:IWebixJetScope)=>void;
    $ondestroy?:()=>void;

    /*
     Id of menu object to associate with
     */
    $menu?:string;

    $windows?: webix.ui.baseviewConfig[];

    $on?: {[eventName:string]:Function};


}