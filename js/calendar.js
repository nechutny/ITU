calendar = {
	open : function() {
		$("body").append('<div id="phoneList"><a href="#" class="btn btn-danger pull-left" onclick="phone.close()">Zavřít</a> <span class="calendarTitle text-center"><a href="#" class="btn btn-primary"><i class="glyphicon glyphicon-chevron-left"></i></a> Listopad 2015 <a href="#" class="btn btn-primary"><i class="glyphicon glyphicon-chevron-right"></i></a></span> <a class="pull-right btn btn-success" onclick="calendar.add()">Přidat</a><div id="calendarCal"></div><div id="calUpcomming"></div><a class="btn btn-success pills">Léky</a></div>');

		text = "";
		for(var i = 1; i <= 30; i++)
		{
			if(i % 7 == 2)
			{
				text += "</tr><tr>";
			}
			if(i == 11)
			{
				text += "<td class='info'>"+i+".</td>";
			}
			else if(i == 13 || i == 18 || i == 23)
			{
				text += "<td class='danger'>"+i+".</td>";
			}
			else
			{
				text += "<td>"+i+".</td>";
			}

		}

		prefix = "";
		for(var i = 26; i <= 31; i++)
		{
			prefix += "<td class='calPrefix active'>"+i+".</td>";
		}

		postfix = "";
		for(var i = 1; i <= 6; i++)
		{
			postfix += "<td class='calPrefix active'>"+i+".</td>";
		}

		$("#calendarCal").html('<table class="table table-bordered table-responsive"><thead><tr><th>Pondělí</th><th>Úterý</th><th>Středa</th><th>Čtvrtek</th><th>Pátek</th><th>Sobota</th><th>Neděle</th></tr></thead><tbody><tr>'+prefix+text+postfix+'</tr></tbody></table>');

		$("#calUpcomming").html("<h3>Nadcházející</h3><ul><li>13.11.2015 14:30 - Vyzvednout Péťu z družiny</li><li>18.11.2015 7:30 - Odběr krve</li><li>23.11.2015 9:00 - Kavárna s Libunou</li></ul>");

	},

	add : function() {
		$("#phoneList").html('<a href="#" class="btn btn-danger pull-left" onclick="$(\'#phoneList\').remove(); calendar.open()">Zavřít</a> <span class="calendarTitle text-center">Přidat do kalendáře</span><div id="calAdd"></div>');

		$("#calAdd").html('<label>Datum:</label><input type="datetime-local" class="form-control"><label>Popis:</label><textarea class="form-control" rows="6"></textarea><br><br><input type="submit" value="Uložit" class="btn btn-success">');
	},

	notify : function() {
		$("body").append('<div id="notifyPill"><img src="img/paralen-500-10-tablets.jpg" class="thumbnail" align="left"> <h3>Paralen 500</h3> <span><i class="pillType glyphicon glyphicon-ban-circle"></i> × 2</span> <button class="btn btn-lg btn-success" id="notifyClose">Vyřešeno</button></div>');

		$("#notifyClose").on('click', function()
		{
			$("#notifyPill").remove();
		});
	}
};