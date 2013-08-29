app.module('details', function(mod, sandbox) {
	sandbox.on('contact:select', function (data) {
		mod.details.setFormData(data);
	});

	sandbox.on('contact:deleted', function (id) {
		mod.details.clear();
	});

	function onFormSubmit(name, command) {
		var data = mod.details.getFormData();
		sandbox.put('/users/'+data.id, data)
			.done(function (data) {
				sandbox.trigger('contact:update', data);
			});
	}

	mod.addInitializer(function (opt) {
		var details = mod.initForm(opt.details.holder);

		details.attachEvent("onButtonClick", onFormSubmit);

		mod.details = details;
	});
});
