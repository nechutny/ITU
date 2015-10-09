$(document).ready(function(){

	$("#menu_calendar").on('click',calendar.open);

	$("#menu_pick").on('click',pick.up);

	$("#menu_phone").on('click',phone.open);

	$("#menu_help").on('mousedown',phone.help.mousedown);
	$("#menu_help").on('mouseup',phone.help.mouseup);
	$("#menu_help").on('mouseout',phone.help.mouseout);
});

pick = {
	'up' : function(){

	}
}