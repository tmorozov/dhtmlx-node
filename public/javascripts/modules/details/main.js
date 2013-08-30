app.module('details', function(mod, sandbox) {
	sandbox.on('contact:selected', function (data) {
		mod.details.setFormData(data);
	});

	sandbox.on('contact:deleted', function (id) {
		mod.details.clear();
	});

	function updateContact() {
		var data = mod.details.getFormData();
		sandbox.trigger('contact:update', data);
	}

	mod.addInitializer(function (opt) {
		var details = mod.initForm(opt.details.holder);

		details.attachEvent("onButtonClick", updateContact);

		mod.details = details;
	});
});
