/**
 * Created by slanska on 2016-05-28.
 */
"use strict";
///<reference path="../../../../../typings/browser.d.ts"/>
var DB;
(function (DB) {
    DB.Create = {};
    var ui = { view: 'template' };
    ui.template = "<strong style=\"background-color: red; color: whitesmoke;\">DB Create</strong>";
    DB.Create.$ui = ui;
})(DB || (DB = {}));
module.exports = DB.Create;
//# sourceMappingURL=create.js.map