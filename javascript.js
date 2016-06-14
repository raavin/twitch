jQuery(document).ready(function($) {
	$.getJSON('https://api.twitch.tv/kraken/users/habathcx', function(data) {
		console.log(data);
        $("#freecodecamp").html(function() {
          //$("#freecodecamp").html("")
          //jQuery.each(data.query.search, function(index, item) {
            $("#freecodecamp").html('<div class="caption">' +
					'<h3>' + data.display_name + ' test</h3>' +
					'<img src="' + data.logo + '" alt="">' +
					'<p>' + data.bio.substring(0, 120) + '...test</p>' +
					'<p><a href="#" role="button"><i class="fa fa-external-link fa-2x" aria-hidden="false"></i></a> </p>' +
				'</div>');
          	
				
          //});
        });
			/*optional stuff to do after success */
			console.log(data.logo);
			console.log(data.bio);
	});

	$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp', function(data) {
		console.log(data);
        //$("#freecodecamp").html(function() {
          //$("#freecodecamp").html("")
          //jQuery.each(data.query.search, function(index, item) {
        //    $("#freecodecamp").html('<div class="caption"><h3>' + data.name + '</h3><p>' + data.bio.substring(0, 120) + '...</p><p><a href="https://www.twitch.tv/' + data.name + '/profile" role="button"><i class="fa fa-external-link fa-2x" aria-hidden="false"></i></a> </p></div>');
          //});
        //});
			/*optional stuff to do after success */
			if (data.stream !== null){
				console.log(data.stream.channel.status);//only exists if live
				console.log(data.stream.preview.small);//only exists if live
			} else {
				console.log("not live");
			}
			
			//console.log(data.bio);
	});

	//$.getJSON('https://api.twitch.tv/kraken/search/games?q=star&type=suggest&live=true', function(json) {
	//		/*optional stuff to do after success */
	//		console.log(json);
			//console.log(json.game)
	//});



});