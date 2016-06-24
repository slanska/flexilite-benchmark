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
        "config": "config"
    },
    waitSeconds: 15
});

define([
    "libs/webix-jet-core/core",
    "libs/webix-jet-core/plugins/menu"
], function (core, menu)
{
    webix.ui.fullScreen();

    //configuration
    var app = core.create({
        id: "Flexilite-Benchmark",
        name: "Flexilite Benchmark",
        version: "0.1.0",
        debug: true,
        start: "/top/db.open"
    });

    app.use(menu);

    return app;
});