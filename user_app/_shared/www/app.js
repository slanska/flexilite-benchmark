/*
	App configuration
*/

define([
	"libs/webix-jet-core/core",
	"libs/webix-jet-core/plugins/menu"
], function(
	core, menu
){

	//configuration
	var app = core.create({
		id:         "Flexilite-Benchmark",
		name:       "Flexilite Benchmark",
		version:    "0.1.0",
		debug:      true,
		start:      "/top/start"
	});

	app.use(menu);
	
	return app;
});