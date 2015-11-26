$(document).ready(function(){

	$("body").disableSelection();

	$("#menu_calendar").on('click',calendar.open);

	$("#menu_pick").on('click',lift.open);

	$("#menu_phone").on('click',phone.open);

	$("#menu_help").on('mousedown',phone.help.mousedown);
	$("#menu_help").on('touchstart',phone.help.mousedown);
	$("#menu_help").on('mouseup',phone.help.mouseup);
	$("#menu_help").on('touchend',phone.help.mouseup);
	$("#menu_help").on('mouseout',phone.help.mouseup);
	$("#menu_help").on('touchleave',phone.help.mouseup);
	$("#menu_help").on('touchcancel',phone.help.mouseup);

	$(".weatherIcon").on('click', calendar.notify);

});

(function($){
	$.fn.disableSelection = function() {
		return this
				.attr('unselectable', 'on')
				.css('user-select', 'none')
				.on('selectstart', false);
	};
})(jQuery);