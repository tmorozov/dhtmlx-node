app.module('toolbar', function(mod, sandbox) {
	function initToolbar(holder) {
		var toolbar = holder.attachToolbar();
		toolbar.addText('tb_txt_1', 1, 'toolbar text');
		return toolbar;
	}

	mod.addInitializer(function (opt) {
		mod.toolbar = initToolbar(opt.toolbar.holder);
	});
});
