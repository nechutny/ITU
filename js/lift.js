

lift = {

	status: 0,

	open : function()
	{
		if(lift.status != 0)
		{
			return;
		}

		$("body").append('<div id="liftProgress" class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%" id="liftProgressBar"> </div></div>');
		lift.status = 0;
		setTimeout(lift.tick, 100);
	},

	tick: function()
	{
		lift.status++;

		if(lift.status >= 100)
		{
			$("#liftProgress").remove();
			lift.status = 0;
		}
		else
		{
			$("#liftProgressBar").css('width', ""+lift.status+"%");
			setTimeout(lift.tick, 100);
		}
	}
};

