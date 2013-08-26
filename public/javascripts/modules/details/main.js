app.module('details', function(mod, sandbox) {
	function initForm(holder) {
		var form = holder.attachForm();

		var formData = [ { 
			type: "fieldset", 
			name: "data", 
			label: "User", 
			inputWidth: "auto", 
			list:[ {
					type:"label", 
					label:'Name'
				},{
					type:"input", 
					name: 'name', 
				}, {
					type:"label", 
					label:"Last Name"
				}, {
					type:"input", 
					name:"last_name", 
				}, {
					type:"button", 
					name:"save", 
					value:"Proceed"
				}
			]
		}];

		var form = holder.attachForm(formData);
		return form;
	}

	mod.addInitializer(function (opt) {
		mod.details = initForm(opt.details.holder);
	});
});