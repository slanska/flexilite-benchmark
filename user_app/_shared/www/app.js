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
    waitSeconds: 150 // TODO 15
});

define([
        'qs',
        'fsmrouter',
        'promiz',
        'lodash'],
    (qs, FSMRouter, Promise, _)=>
    {
        
        require(['libs/fsmrouter/lib/webixRouter', "./routes"], (app, routes) =>
        {
            // For mobile devices
            webix.ui.fullScreen();

            FSMRouter.start();
        });

        return FSMRouter;
    });