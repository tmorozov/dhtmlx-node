
var layout;
var menu;

dhtmlxEvent(window,"load",function(){
	layout = new dhtmlXLayoutObject(document.body,"2U");
    layout.cells("a").setText("Contacts");
    layout.cells("b").setText("Contact Details");
    layout.cells("a").setWidth(500);

    menu = layout.attachMenu();
})

