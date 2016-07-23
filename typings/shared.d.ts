/**
 * Created by slanska on 2016-05-29.
 */

///<reference path="./lodash/lodash.d.ts"/>
///<reference path="./moment/moment.d.ts"/>
///<reference path="./qs/qs.d.ts"/>
///<reference path="../user_app/_shared/www/libs/fsmrouter/lib/FSMRouter.d.ts"/>

declare namespace FileSys
{
    const enum FileType
    {
        ParentDirectory = 0,
        Directory = 1,
        File = 2
    }

    interface IFileStats
    {
        // File or directory name
        name:string;

        // Directory name, relative to
        directoryName:string;
        type:FileType;
        created:Date;
        lastAccessed:Date;
        modified:Date;
        size:number;
    }

    /*
     Response for GET /filesys request
     */
    interface IFileList
    {
        path:string;
        files:IFileStats[];
    }
}

declare namespace DBSys
{
    interface IDBFileOpen
    {
        dir:string;
        fileName:string;
    }

    interface IDBTableOpen extends IDBFileOpen
    {
        tableName:string;
    }

    const enum DBTableType
    {
        EAV = 0,
        Regular = 1,
        View = 2,
        System = 3
    }

    interface IDBTableInfo
    {
        name:string;
        type: DBTableType;
    }
}