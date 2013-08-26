app.module('contacts', function(mod, sandbox) {
	function initGrid(holder) {
		var grid = holder.attachGrid();
		grid.setHeader("Name,Last Name,Email");
		grid.attachHeader("#text_filter,#text_filter,#text_filter");
		grid.setInitWidths("100,100,*");
		grid.setColAlign("left,left,left");
		grid.setColTypes("ro,ro,ro");
		grid.setColSorting("str,str,str");
		grid.setColumnIds("name,last_name,email");
		grid.init();
		return grid;
	}

	mod.addInitializer(function (opt) {
		mod.contacts = initGrid(opt.contacts.holder);
		mod.contacts.load('/users', 'js');
	});
});