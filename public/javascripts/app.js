/*globals dhtmlXLayoutObject, core */

var app = new core.Application({});

function initLayout() {
	var layout = new dhtmlXLayoutObject(document.body,"2U");
	layout.cells("a").setText("Contacts");
	layout.cells("b").setText("Contact Details");
	layout.cells("a").setWidth(500);
	return layout;
}

app.addInitializer(function (options) {
	this.layout = initLayout();
	options['menu'] = {
		holder: this.layout
	};
	options['toolbar'] = {
		holder: this.layout
	};
	options['contacts'] = {
		holder: this.layout.cells("a")
	};
	options['details'] = {
		holder: this.layout.cells("b")
	};
});


dhtmlx.image_path = "../stylesheets/imgs/";
DomReady.ready(function() {
	app.start({});
});
