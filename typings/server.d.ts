/**
 * Created by slanska on 2016-05-28.
 */

///<reference path="./shared.d.ts"/>
///<reference path="./node/node.d.ts"/>
///<reference path="./sqlite3/sqlite3.d.ts"/>
///<reference path="./express/express.d.ts"/>
///<reference path="./cors/cors.d.ts"/>
///<reference path="./express-serve-static-core/express-serve-static-core.d.ts"/>
///<reference path="./serve-static/serve-static.d.ts"/>

declare const enum SQLITE_OPEN_FLAGS
{
    SHARED_CACHE = 0x00020000,
    WAL = 0x00080000
}

/*
 Extend Function prototype to allow sync calls
 */
interface Function
{
    sync(thisArg, ...args):any;
    sync<T>(thisArg, ...args):T;
}