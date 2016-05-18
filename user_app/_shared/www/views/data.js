define([
	"models/records"
],function(records){

	var ui = {
		view:"datatable", autoConfig:true
	};

	return {
		$ui: ui,
		$oninit:function(view){
			view.parse(records.data);
		}
	};
	
});
