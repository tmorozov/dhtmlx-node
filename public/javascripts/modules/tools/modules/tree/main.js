app.module('tools').module('tree', function(mod, sandbox) {
	function initTree(holder) {
		var treeStruct = [
			["1","0","location 1"],
			["4","0","location 2"],
			["3","2","param 1.1.1"],
			["2","1","device 1.1"]
		];

		var tree = holder.attachTree();

		tree.enableDragAndDrop(true);
		// tree.enableMercyDrag(true); // requires proffesional library

		tree.loadJSArray(treeStruct);
		// prevent movement of elements
		tree.attachEvent("onDrag", function(sId,tId,id,sObject,tObject){
			return false;
		});
		return tree;
	}

	mod.addInitializer(function (opt) {
		var tree = initTree(opt.tools.tree.holder);
		mod.tree = tree;
	});
});
