app.module('details', function(mod, sandbox) {
	mod.initForm = function (holder) {
		var formData = [ {
			type: "fieldset",
			name: "data",
			label: "User",
			inputWidth: "auto",
			list:[ {
					type:"hidden",
					name: 'id',
				},{
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
					type:"label",
					label:'Email'
				},{
					type:"input",
					name: 'email',
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
});
