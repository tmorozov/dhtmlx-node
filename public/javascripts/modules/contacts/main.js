app.module('contacts', function(mod, sandbox) {
	function initGrid(holder) {
		var grid = holder.attachGrid();
		grid.setHeader("Name,Last Name,Email");
		grid.attachHeader("#text_filter,#text_filter,#text_filter");
		grid.setInitWidths("100,100,*");
		grid.setColAlign("left,left,left");
		grid.setColTypes("ro,ro,ro");
		grid.setColSorting("str,str,str");
		grid.setColumnIds("name,last_name,email");
		grid.init();
		return grid;
	}

	function getDataFromRow(id) {
		return {
			id: id,
			name: mod.contacts.cells(id, 0).getValue(),
			last_name: mod.contacts.cells(id, 1).getValue(),
			email: mod.contacts.cells(id, 2).getValue(),
		}
	}

	function setDataInRow(data) {
		console.log(data);
		var id = data.id;
		mod.contacts.cells(id,0).setValue(data.name);
		mod.contacts.cells(id,1).setValue(data.last_name);
		mod.contacts.cells(id,2).setValue(data.email);
	}

	function insertDataRow(data) {
		mod.contacts.addRow(data.id, '', null);
		setDataInRow(data);
	}

	function deleteSelectedContact() {
		var grid = mod.contacts;
		var rowId = grid.getSelectedRowId();
		if (rowId) {
			sandbox.del('/users/'+rowId)
				.done(function (data) {
					sandbox.trigger('contact:deleted', rowId);
					grid.deleteRow(rowId);
				});
		}
	}

	sandbox.on('contact:del', deleteSelectedContact);
	sandbox.on('contact:update', setDataInRow);
	sandbox.on('contact:created', insertDataRow);


	function onRowSelect(rId,cInd) {
		var data = getDataFromRow(rId);
		sandbox.trigger('contact:select', data);
	}

	mod.addInitializer(function (opt) {
		var contacts = initGrid(opt.contacts.holder);

		// could use
		// mygrid.parse(data,"json");
		contacts.load('/users', 'js');

		contacts.attachEvent("onRowSelect", onRowSelect);

		mod.contacts = contacts;
	});


});
