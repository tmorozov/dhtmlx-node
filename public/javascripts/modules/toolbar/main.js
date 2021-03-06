app.module('toolbar', function(mod, sandbox) {
	function initToolbar(holder) {
		var toolbar = holder.attachToolbar();
		toolbar.addButton('add_btn', 1, 'Add', null, null);
		toolbar.setItemToolTip('add_btn', 'Add Contact');

		toolbar.addButton('del_btn', 1, 'Del', null, null);
		toolbar.setItemToolTip('del_btn', 'Del Contact');

		toolbar.attachEvent("onclick", function (id) {
			if (id === "add_btn" ) {
				sandbox.trigger('contact:new');
			} else if (id === "del_btn" && mod.selectedContactId ) {
				sandbox.trigger('contact:delete', mod.selectedContactId);
			}
  		});
		return toolbar;
	}

	sandbox.on('contact:selected', function (data) {
		mod.selectedContactId = data.id;
	});

	sandbox.on('contact:deleted', function (data) {
		mod.selectedContactId = null;
	});

	mod.addInitializer(function (opt) {
		mod.toolbar = initToolbar(opt.toolbar.holder);
		mod.selectedContactId = null;
	});
});

