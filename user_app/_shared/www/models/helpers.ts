/**
 * Created by slanska on 2016-06-04.
 */

///<reference path="../../../../typings/browser.d.ts"/>

import _ = require('lodash');

/*
 Generates ID for webix component in the format parent_module_name:component_id.
 This approach: 1) provides uniqueness of IDs across all components, 2) creates well-known IDs (good for automated testing, for example)
 */
export function uid(app:IWebixJetApp, id:string):string
{
    var result = '';
    if (app && app.path)
    {
        _.forEach(app.path, (p)=>
        {
            if (result !== '')
                result += `:${p.page}`;
            else result += p.page;
        });
    }
    result += `:${id}`;
    return result;
}

/*

 */
export function encodeUrlParam()
{
}

/*

 */
export function decodeUrlParam()
{
}

