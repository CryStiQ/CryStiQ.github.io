$(document).ready(function(){ 											// Runs on page load!
	$.getJSON('https://api.twitch.tv/kraken/streams/crystiq?client_id=6di40nucwiqexur68xkayh0gxmc6gp', function(channeldata){
		if (channeldata["stream"] !== null) { 
        		$("#twitch-status").html("<i class='fa fa-circle'></i> Live for " + channeldata["stream"].viewers + " viewers!");
		} else {
			$("#twitch-status").text("Offline!");
		};
	})
}); 
