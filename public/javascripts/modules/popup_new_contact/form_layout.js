app.module('popup_new_details', function(mod, sandbox) {
	mod.initForm = function (holder) {
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
					type:"label",
					label:'Email'
				},{
					type:"input",
					name: 'email',
				},{
					type:"button",
					name:"create",
					value:"Create"
				}
			]
		}];

		var form = holder.attachForm(formData);
		return form;
	}
});
