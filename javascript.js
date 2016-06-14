jQuery(document).ready(function($) {
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", 
				 "RobotCaleb", "noobs2ninjas", "brunofin", "comster404",
				 "iseptimusi","brianamarie132", "KrisVos130", "AkiraLaine", "DemiPixel", "JackeL"]

	users.forEach(function(item){
		$.getJSON('https://api.twitch.tv/kraken/streams/' + item, function(data) {
			//console.log(data);

				/*optional stuff to do after success */
				if (data.stream !== null){// if not null then stream is live
				$("#liveStreams").html(function() {
					$("#liveStreams").append(
	            	'<div class="col-xs-12 col-sm-6 col-md-4">' +
		            	'<div class="thumbnail card card-up">' +
			            	'<div class="caption">' +
								'<h3>' + data.stream.channel.display_name + '</h3>' +
								'<img src="' + data.stream.channel.logo + '" alt="">' +
								'<p>' + data.stream.channel.status.substring(0, 120) + '...</p>' +
								'<p><a href="' + data.stream.channel.url + '" role="button"><i class="fa fa-external-link fa-2x" aria-hidden="false"></i></a> </p>' +
							'</div>' +
						'</div>' +
					'</div>'
					);
				});
					console.log(data.stream.channel.status);//only exists if live
					console.log(data.stream.preview.small);//only exists if live
					console.log(data.error + " : error message");// data.error and data.status are only available if account is closed
					console.log(data.status + " ; status" );
													//****************************************************************
				} else if (data.status == 422) { 	//*if throws 422 error account is closed, but is giving undefined*
													//****************************************************************
				$.getJSON('https://api.twitch.tv/kraken/users/' + item, function(data) {
				console.log(data);
			        $("#streamerGraveyard").html(function() {

			            $("#streamerGraveyard").append(
			            	'<div class="col-xs-12 col-sm-6 col-md-4">' +
				            	'<div class="thumbnail card card-up">' +
					            	'<div class="caption">' +
										'<h3>' + data.display_name + '</h3>' +
										'<img src="' + (data.logo === null ? "http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png" : data.logo) + '" alt="">' +
										'<p>' + (data.bio === null ? "" : data.bio.substring(0, 120)) + '...</p>' +
										'<p><a href="https://www.twitch.tv/' + data.name + '" role="button"><i class="fa fa-external-link fa-2x" aria-hidden="false"></i></a> </p>' +
									'</div>' +
								'</div>' +
							'</div>'
						);
			        });
		    	});
				} else { // else streamer is not live
				
				$.getJSON('https://api.twitch.tv/kraken/users/' + item, function(data) {
				console.log(data);
			        $("#sleepingStreamers").html(function() {

			            $("#sleepingStreamers").append(
			            	'<div class="col-xs-12 col-sm-6 col-md-4">' +
				            	'<div class="thumbnail card card-up">' +
					            	'<div class="caption">' +
										'<h3>' + data.display_name + '</h3>' +
										'<img src="' + (data.logo === null ? "http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png" : data.logo) + '" alt="">' +
										'<p>' + (data.bio === null ? "" : data.bio.substring(0, 120)) + '...</p>' +
										'<p><a href="https://www.twitch.tv/' + data.name + '" role="button"><i class="fa fa-external-link fa-2x" aria-hidden="false"></i></a> </p>' +
									'</div>' +
								'</div>' +
							'</div>'
						);
			        });
		   		});
				}
				
		});
	});

});