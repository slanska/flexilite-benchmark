///<reference path="../../../../typings/browser.d.ts"/>


define([
    "app"
], function (app:IWebixJetApp)
{
    var header = {
        type: "header", template: app.config.name
    };

    var menu = {view: "menu"} as webix.ui.menuConfig;
    menu.id = "top:menu";
    menu.layout = 'x';
    menu.select = true;
    menu.template = '<span class="webix_icon fa-#icon#"></span> #value# ';
    menu.data = [
        {value: "New Database", id: "db:new", href: "#!/db.create", icon: "envelope-o"},
        {value: "Open Database", id: "db:open", href: "#!/db.start", icon: "briefcase"}
    ];

    var ui = {
        type: "line", rows: [
            {
                type: "space", css: "app-left-panel",
                padding: 10, margin: 20, borderless: true, rows: [header, menu]
            },
            {
                cols: [{width: 10},
                    {
                        type: "clean", css: "app-right-panel", padding: 4, rows: [
                        {$subview: true}
                    ]
                    }
                ]
            }
        ]
    };

    return {
        $ui: ui,
        $menu: "top:menu"
    };
});