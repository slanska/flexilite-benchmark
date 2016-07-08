/*
 App configuration
 */

require.config({
    // baseUrl: "",
    paths: {
        "lodash": "libs/lodash/lodash",
        "underscore": "libs/lodash/lodash",
        "Backbone": "libs/backbone/backbone",
        "moment": "libs/moment/moment",
        "codemirror": "libs/codemirror/lib/codemirror",
        "qs": "libs/qs/dist/qs",
        "config": "config",
        "fsmrouter": "libs/fsmrouter/lib/index",
        "promiz": "libs/promiz/promiz"
    },
    waitSeconds: 15
});

define([
    // "libs/webix-jet-core/core",
    // "libs/webix-jet-core/plugins/menu",
    "./routes"
], function (routes)
{
    // For mobile devices
    webix.ui.fullScreen();

    routes.start('data/open');

    //configuration
    // var app = core.create({
    //     id: "Flexilite-Benchmark",
    //     name: "Flexilite Benchmark",
    //     version: "0.1.0",
    //     debug: true,
    //     start: "/top/db.open"
    // });
    //
    // app.use(menu);
    //
    // return app;
});