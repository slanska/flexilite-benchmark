/**
 * Created by slanska on 2016-05-29.
 */

///<reference path="./lodash/lodash.d.ts"/>
///<reference path="./moment/moment.d.ts"/>
///<reference path="./bluebird/bluebird.d.ts"/>
///<reference path="./qs/qs.d.ts"/>

declare namespace FileSys
{
    /*
    Response for GET /filesys request
     */
    interface IFileList
    {
        path:string;
        files:string[];
    }
}