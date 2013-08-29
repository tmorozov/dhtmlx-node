app.module('popup_new_details', function(mod, sandbox) {
	function closeWindow () {
		mod.popup = false;
		return true;
	}

	function createPopup(id, size, title) {
		var winCreator = mod.winCreator;

		var popup = winCreator.createWindow(id, size.tx, size.ty, size.w, size.h);
		popup.center();
		popup.setText(title);
		winCreator.window(id).attachEvent("onClose", closeWindow);

		return popup;
	}

	function onFormSubmit(name, command) {
		var data = mod.form.getFormData();
		sandbox.post('/users/', data)
			.done(function (data) {
				sandbox.trigger('contact:created', data);
				mod.popup.close();
			});
	}

	sandbox.on('contact:new', function () {
		if ( mod.popup ) {
			return;
		}

		var id = "newcontact_win";
		var size = {
			tx: 0,
			ty: 0,
			w: 240,
			h: 300
		};
		var popup = createPopup(id, size, "New Contact");
		var form = mod.initForm(popup);

		form.attachEvent("onButtonClick", onFormSubmit);

		mod.popup = popup;
		mod.form = form;
	});


	mod.addInitializer(function (opt) {
		mod.winCreator = opt.popups.holder.dhxWins;
		mod.popup = false;
	});
});
