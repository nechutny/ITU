phone = {
	open : function() {

	},

	help : {
		interval: -1,
		count: 0,

		mousedown: function(e){
			if(phone.help.interval == -1)
			{
				phone.help.count = -1;
				phone.help.interval = setInterval(phone.help.tick, 1000);
				phone.help.tick();
			}

		},

		mouseup: function(){
			if(phone.help.interval != -1)
			{
				if(phone.help.count == 0)
				{
					alert('Stiskněte 3 vteřiny.')
				}
				clearInterval(phone.help.interval);
				phone.help.interval = -1;
			}
			$("#countDown").hide();
		},

		tick: function(){
			phone.help.init();
			phone.help.count++;
			$("#countDown").html(3-phone.help.count);
			$("#countDown").show();
			if(3-phone.help.count == 0)
			{
				alert('Volám...');
			}
		},

		init: function(){
			if($("#countDown").length == 0)
			{
				$("body").append("<div id='countDown'></div>");
			}
		}
	}
};