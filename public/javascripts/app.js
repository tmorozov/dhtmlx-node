/*globals dhtmlXLayoutObject */

var app = {
	layout: {},
	menu: {},
	toolbar: {},
	grid: {}
};

function initLayout() {
	var layout = new dhtmlXLayoutObject(document.body,"2U");
	layout.cells("a").setText("Contacts");
	layout.cells("b").setText("Contact Details");
	layout.cells("a").setWidth(500);
	return layout;
}

function initMenu(holder) {
	var menu = holder.attachMenu();
	menu.addNewSibling(null, "file", "File", false); // adding the first item to the menu, "nextToId" param is null
	menu.addNewChild("file", 0, "file_new", "New", false); // adding a new child item
	menu.setHotKey("file_new", "Ctrl+N"); // setting a hotkey to a button
	menu.addNewSeparator("file_new"); // adding a separator
	return menu;
}

function initToolbar(holder) {
	var toolbar = holder.attachToolbar();
	toolbar.addText('tb_txt_1', 1, 'toolbar text');
	return toolbar;
}

function initGrid(holder) {
	var grid = holder.attachGrid();
	grid.setHeader("Name,Last Name,Email");
	grid.setInitWidths("100,100,*");
	grid.setColAlign("left,left,left");
	grid.setColTypes("ro,ro,ro");
	grid.setColSorting("str,str,str");
	grid.setColumnIds("name,last_name,email");
	grid.init();
	grid.load('/users', 'js');
	return grid;
}

dhtmlx.image_path = "../stylesheets/imgs/";
dhtmlxEvent(window,"load",function(){
	app.layout = initLayout();
	app.menu = initMenu(app.layout);
	app.toolbar = initToolbar(app.layout);
	app.grid = initGrid(app.layout.cells("a"));
})

