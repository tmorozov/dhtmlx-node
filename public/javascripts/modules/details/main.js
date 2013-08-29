app.module('details', function(mod, sandbox) {
	sandbox.on('contact:select', function (id, data) {
		mod.details.setFormData(data);
		mod.details.curentId = id;
	});

	function onFormSubmit(name, command) {
		var data = mod.details.getFormData();
		sandbox.put('/users/'+mod.details.curentId, data)
			.done(function (data) {
				sandbox.trigger('contact:update', mod.details.curentId, data);
			});
	}

	mod.addInitializer(function (opt) {
		var details = mod.initForm(opt.details.holder);

		details.attachEvent("onButtonClick", onFormSubmit);

		mod.details = details;
	});
});
