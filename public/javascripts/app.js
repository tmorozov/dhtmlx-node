/*globals dhtmlXLayoutObject, core, sandbox_extension */

var sandbox_extension = sandbox_extension || {};
var app = new core.Application(sandbox_extension);

function initLayout() {
	var layout = new dhtmlXLayoutObject(document.body,"3W");
	layout.cells("a").setText("Contacts");
	layout.cells("b").setText("Contact Details");
	layout.cells("c").setText("Tools");
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
		},
		popups: {
			holder: this.layout
		},
		tools: {
			holder: this.layout.cells('c')
		}
	});
});


dhtmlx.image_path = "../stylesheets/imgs/";

$(function() {
	app.start({});
});
