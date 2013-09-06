app.module('tools', function(mod, sandbox) {
	function initLayout(holder) {
		var layout = holder.attachLayout("2E");
		layout.cells("a").setText("autocomplete");
		layout.cells("b").setText("dinamic tree");
		return layout;
	}

	mod.addInitializer(function (opt) {
		var layout = initLayout(opt.tools.holder);
		core.extend(opt.tools, {
			autocomplete: {
				holder: layout.cells('a')
			},
			tree: {
				holder: layout.cells('b')
			}
		});
	});
});
