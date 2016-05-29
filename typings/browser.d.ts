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
}

declare interface IWebixJetScope
{
    show(url:string);
    on(instance:any, eventName:string, handler:Function);
}

/*
 Declares contract for webix-jet viewmodule
 */
declare interface IWebixJetModule
{
    $ui:webix.ui.baseviewConfig;
    $oninit?:(view:webix.ui.baseview, $scope:IWebixJetScope)=>void;
    $onurlchange?:(config:webix.ui.baseviewConfig, url, $scope:IWebixJetScope)=>void;
    $ondestroy?:()=>void;

    /*
     Id of menu object to associate with
     */
    $menu?:string;

    $windows?: webix.ui.baseviewConfig[];

    $on?: {[eventName:string]:Function};
}