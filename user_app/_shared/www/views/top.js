///<reference path="../../../../typings/browser.d.ts"/>
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../models/helpers'], factory);
    }
})(function (require, exports) {
    "use strict";
    var app = require('../app');
    var helpers = require('../models/helpers');
    var header = {
        type: "header", template: app.config.name
    };
    var menu = { view: "menu" };
    menu.id = helpers.uid(app, "menu");
    menu.layout = 'x';
    menu.select = true;
    menu.template = '<span class="webix_icon fa-#icon#"></span> #value# ';
    menu.data = [
        { value: "New Database", id: "db:new", href: "#!/top/db.create", icon: "envelope-o" },
        { value: "Open Database", id: "db:open", href: "#!/top/db.open", icon: "briefcase" }
    ];
    var ui = {
        type: "line", rows: [
            {
                type: "space", css: "app-left-panel",
                padding: 10, margin: 20, borderless: true, rows: [header, menu]
            },
            {
                cols: [{ width: 10 },
                    {
                        type: "clean", css: "app-right-panel", padding: 4, rows: [
                            { $subview: true }
                        ]
                    }
                ]
            }
        ]
    };
    var module = {
        $ui: ui,
        $menu: menu.id
    };
    return module;
});
//# sourceMappingURL=top.js.map