jQuery(document).ready(function($) {
	$.getJSON('https://api.twitch.tv/kraken/channels/freecodecamp?callback=?', function(json) {
			/*optional stuff to do after success */
			console.log(json)
			console.log(json.game)
	});

	$.getJSON('https://api.twitch.tv/kraken/search/games?q=star&type=suggest&live=true', function(json) {
			/*optional stuff to do after success */
			console.log(json)
			//console.log(json.game)
	});


});