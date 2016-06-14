/**
 * Created by slanska on 2016-06-04.
 */

///<reference path="../../../../typings/browser.d.ts"/>

import _ = require('lodash');
import qs = require('qs');


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
 Encodes an object into base64 string.
 Used for passing parameters in URL
 */
// TODO Move to shared folder
export function encodeUrlParam(params:any):string
{
    var result = window.btoa(qs.stringify(params));
    return result;
}

/*
 Decodes base64-string to an object.
 Used for passing parameters in URL.
 */
export function decodeUrlParam(urlParam:string|any):any
{
    var v = getParamFromUrl(urlParam);
    var result = qs.parse(window.atob(v));
    return result;
}

export function getParamFromUrl(urlParam)
{
    var v;

    if (_.isString(urlParam))
        v = urlParam;
    else
        if (_.isArray(urlParam))
        {
            v = urlParam[0];
        }
        else
        {
            v = Object.keys(urlParam)[0];
        }
    return v;
}



