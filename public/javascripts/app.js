/*globals dhtmlXLayoutObject */

var app = (function (window) {
	var layout;
	var menu;
	var toolbar;
	var grid;
	var form;

	function getLayout() {
		return layout;
	}
	function getMenu() {
		return menu;
	}
	function getToolbar() {
		return toolbar;
	}
	function getForm() {
		return form;
	}

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
		grid.attachHeader("#text_filter,#text_filter,#text_filter");
		grid.setInitWidths("100,100,*");
		grid.setColAlign("left,left,left");
		grid.setColTypes("ro,ro,ro");
		grid.setColSorting("str,str,str");
		grid.setColumnIds("name,last_name,email");
		grid.init();
		return grid;
	}

	function initForm(holder) {
		var form = holder.attachForm();

		var formData = [ { 
			type: "fieldset", 
			name: "data", 
			label: "User", 
			inputWidth: "auto", 
			list:[ {
					type:"label", 
					label:'Name'
				},{
					type:"input", 
					name: 'name', 
				}, {
					type:"label", 
					label:"Last Name"
				}, {
					type:"input", 
					name:"last_name", 
				}, {
					type:"button", 
					name:"save", 
					value:"Proceed"
				}
			]
		}];

		var form = holder.attachForm(formData);
		return form;
	}

	window.dhtmlx.image_path = "../stylesheets/imgs/";
	window.DomReady.ready(function() {
		layout = initLayout();
		menu = initMenu(layout);
		toolbar = initToolbar(layout);
		grid = initGrid(layout.cells("a"));
		form = initForm(layout.cells("b"));
		grid.load('/users', 'js');
	});
	
	// window.dhtmlxEvent(window, "load", function(){
	// 	layout = initLayout();
	// 	menu = initMenu(layout);
	// 	toolbar = initToolbar(layout);
	// 	grid = initGrid(layout.cells("a"));
	// 	form = initForm(layout.cells("b"));
	// 	grid.load('/users', 'js');
	// });

	return {
		layout: getLayout,
		menu: getMenu,
		toolbar: getToolbar,
		grid: grid,
		form: getForm
	};

})(window);

