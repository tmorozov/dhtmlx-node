app.module('tools').module('autocomplete', function(mod, sandbox) {
	function initForm(holder) {
		var formData = [ {
			type: "fieldset",
			name: "data",
			label: "prediction sample",
			inputWidth: "auto",
			list:[ {
					type: "combo",
					name: "myCombo",
					label: "user search",
					filtering: true,
					required: true,
					options:[]
				}
			]
		}];

		var form = holder.attachForm(formData);
		return form;
	}

	function attachAutocompleteTo(combo, url) {
		combo.attachEvent("onKeyPressed", onComboKeyPressed);

		function onComboKeyPressed(keyCode) {
			var text = combo.getComboText();
			if (text.length < 2) {
				return;
			}
			sandbox.get(url+"?mask="+text).done( function(data) {
				combo.clearAll();
				var options = data.data.map(function(item){
					return [item.id, item.name];
				});
				combo.addOption(options);
			});
		}
	}

	mod.addInitializer(function (opt) {
		var form = initForm(opt.tools.autocomplete.holder);
		var combo = form.getCombo("myCombo");
		combo.setSize(100);

		attachAutocompleteTo(combo, '/users/');

	});
});
