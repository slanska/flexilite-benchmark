/*
 App configuration
 */

require.config({
    // baseUrl: "",
    paths: {
        "lodash": "libs/lodash/lodash",
        "moment": "libs/moment/moment",
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

    //configuration
    var app = core.create({
        id: "Flexilite-Benchmark",
        name: "Flexilite Benchmark",
        version: "0.1.0",
        debug: true,
        start: "/top/start"
    });

    app.use(menu);

    return app;
});