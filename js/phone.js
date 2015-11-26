phone = {
	open : function() {

		if($("#phoneList").length == 0)
		{
			phone.init();
		}

		phone.render();
	},

	render: function()
	{
		data = {
			0 : {
				'name' : "Lena",
				'icon' : 'lena_color.gif',
			},
			1 : {
				'name' : "Péťa",
				'icon' : 'person-placeholder.jpg',
			},
			2 : {
				'name' : "Pepa",
				'icon' : 'house.png',
			},
			3 : {
				'name' : "Gastroenterologie",
				'icon' : 'person-placeholder.jpg',
			},
			4 : {
				'name' : "Kája Novák",
				'icon' : 'person-placeholder.jpg',
			},
			5 : {
				'name' : "Ondřej",
				'icon' : 'person-placeholder.jpg',
			},
			6 : {
				'name' : "Klára",
				'icon' : 'person-placeholder.jpg',
			}
		};

		result = "";

		for(var i = 0; i < Object.keys(data).length; i++)
		{
			result += "<div> <img src='img/"+data[i]['icon']+"' height='120' align='left' class='thumbnail'> <span>"+data[i]['name']+"</span><a href='#' class='btn btn-success pull-right callButton' onclick='alert(\"Volám přes Skype\")'><i class='fa fa-phone'></i></a></div><hr>";
		}

		$("#phoneListList").html(result);
	},

	init : function() {
		$("body").append('<div id="phoneList"><a href="#" class="btn btn-danger pull-left" onclick="phone.close()">Zavřít</a> <span class="text-center">Kontakty</span> <a class="pull-right btn btn-primary" onclick="alert(\'Dojde k otevření Skype\')">Přidat</a><div id="phoneListList"></div></div>');

	},

	close: function() {
		console.log(1);
		$("#phoneList").remove();
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
					if($("#countDown").css('display') != 'none')
					{
						$("#countDown").hide();
						alert('Stiskněte 3 vteřiny.');
					}
				}
				else
				{
					$("#countDown").hide();
				}

				clearInterval(phone.help.interval);
				phone.help.interval = -1;
			}

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