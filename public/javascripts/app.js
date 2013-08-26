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
	core.extend(options, {
		menu: {
			holder: this.layout
		},
		toolbar: {
			holder: this.layout
		},
		contacts: {
			holder: this.layout.cells("a")
		},
		details: {
			holder: this.layout.cells("b")
		}
	});
});


dhtmlx.image_path = "../stylesheets/imgs/";
DomReady.ready(function() {
	app.start({});
});
