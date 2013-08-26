app.module('menu', function(mod, sandbox) {
	function initMenu(holder) {
		var menu = holder.attachMenu();
		menu.addNewSibling(null, "file", "File", false); // adding the first item to the menu, "nextToId" param is null
		menu.addNewChild("file", 0, "file_new", "New", false); // adding a new child item
		menu.setHotKey("file_new", "Ctrl+N"); // setting a hotkey to a button
		menu.addNewSeparator("file_new"); // adding a separator
		return menu;
	}

	mod.addInitializer(function (opt) {
		mod.menu = initMenu(opt.menu.holder);
	});
});
