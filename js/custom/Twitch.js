/** 
Gets data from the twitch API in order to determine the stream status,
shows current stream status in a badge icon for the twitch button!
**/

const TwitchAPI = "https://api.twitch.tv/kraken/streams/crystiq?client_id=6di40nucwiqexur68xkayh0gxmc6gp"; // Twitch API url!

$(document).ready(function(){ // Runs on page load!
	$.getJSON(TwitchAPI, function(channeldata){
		if (channeldata["stream"] !== null) { 
			// The stream is not null, AKA it's live!
        	$("#twitch-status").addClass('badge-twitch-live').html("<i class='fa fa-circle'></i> Live for " + channeldata["stream"].viewers + " viewers!"); // Shows the current viewers, sets badge style to live red color!
		
		} else { 
			// The stream is most likely offline!

			$("#twitch-status").addClass('badge-twitch-offline').text("Off air!") // Sets the badge style and text!
		};
	})
}); 
