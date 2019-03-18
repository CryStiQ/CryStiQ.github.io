// Mednis 2019
const mcapi = "https://mcapi.us/server/status?ip="

const vanilla = "mc.crystiq.me"

var apiurl
var players, neme, 

apiurl = mcapi + vanilla;
$(document).ready(function(){ 											
	$.getJSON(apiurl, function(result){ 
		//console.log(result);
		if (result.online) {
			players = result.players;
			$("#vanilla-players").text(players.max+ "/" + players.now);
		} else {
			$("#vanilla-players").text("Offline ): ");
		};
	});
});

