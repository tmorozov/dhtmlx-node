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

	sandbox.on('contact:select', function (id) {
		console.log('id:', id);
//		mod.details.load('/users/'+id, 'js');
		sandbox.get('/users/'+id).done(function(data) {
			mod.details.setFormData(data);
		});
		// 		{
		// 			id: id,
		// 	"name": "Вася",
		// 	"last_name": "Пупкин",
		// 	"email": "vp@google.com"
		// });
	});

	mod.addInitializer(function (opt) {
		mod.details = initForm(opt.details.holder);
	});
});