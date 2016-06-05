/**
 * Created by slanska on 2016-06-04.
 */

///<reference path="../../../../typings/browser.d.ts"/>


/*
 Generates ID for webix component in the format parent_module_name:component_id.
 This approach: 1) provides uniqueness of IDs across all components, 2) creates well-known IDs (good for automated testing, for example)
 */
export function uid($scope:IWebixJetScope, id:string):string
{
    var result = id;
    var p = $scope;
    while (p)
    {
        result = `${p.name}:${result}`;
        p = p.parent;
    }
    return result;
}