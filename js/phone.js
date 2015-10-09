phone = {
	open : function() {

	},

	/**
	 * Call help subsystem
	 */
	help : {
		/**
		 * Interval for call countdown
		 */
		interval: -1,

		/**
		 * Number of passed seconds
		 */
		count: 0,

		/**
		 * Handler for mousedown event - start
		 */
		mousedown: function(){
			// Only first time
			if(phone.help.interval == -1)
			{
				phone.help.count = -1;
				phone.help.interval = setInterval(phone.help.tick, 1000);
				phone.help.tick();
			}
		},

		/**
		 * Handler for mouseup - interrupted
		 */
		mouseup: function(){
			if(phone.help.interval != -1)
			{
				// Only clicked
				if(phone.help.count == 0)
				{
					alert('Stiskněte 3 vteřiny.')
				}
				clearInterval(phone.help.interval);
				phone.help.interval = -1;
			}
			$("#countDown").hide();
		},

		/**
		 * Tick each second
		 */
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

		/**
		 * Initialize countdown
		 */
		init: function(){
			if($("#countDown").length == 0)
			{
				$("body").append("<div id='countDown'></div>");
			}
		}
	}
};