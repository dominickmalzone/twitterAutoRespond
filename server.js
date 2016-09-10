
var express = require('express');
var app = express();
var port = 8300;
var twitter = require('twitter');

var twit = new twitter({  
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

var params = { follow: '' }// include twitter id of those you want to respond to. (Seperated by commas)
var todaysTweets = [];
//var data = require('fs').readFileSync('testgif.gif'); //uncomment & upload media into root dir
 

twit.stream('statuses/filter', params,  function(stream) {
  stream.on('data', function(tweet) {
      	
      	if (todaysTweets.indexOf(tweet.id_str) > -1) { //Checks to see if it was already responded too
    		console.log("Responded");
    	} else { 
    		if (tweet.user.id_str == ''){ //enter targets twitter id here as well. this makes sure we only respond to the user's tweets (not mentions). 

				//Media Response
					twit.post('media/upload', {media: data}, function(error, media, response) {
					  if (!error) {
					    console.log("Successful upload"); //console.log(media);
						    var status = {
						      status: '@userName, this is gif response',
						      in_reply_to_status_id: tweet.id_str,
						      media_ids: media.media_id_string // Pass the media id string
						    }
					    twit.post('statuses/update', status, function(error, tweet, response) {
					      if (!error) {
					        console.log("The response with image was sent: " + tweet.text);
					        todaysTweets.push(tweet.id_str);// adds to 'todays tweets' so we dont respond multiple times
					      }
					    });
					  }
					});
				//Media response


				//Tweet Response
				   //  		twit.post('statuses/update', 
				   //  			{status: "@dominickmalzone great script!",
				   //  			 in_reply_to_status_id: tweet.id_str }
				   //  			, function(error, tweet, response) {
							//   if (!error) {
							//     console.log("This response was sent: " + tweet.text);
							//     todaysTweets.push(tweet.id_str);
							//   }
							// });

				//Tweet Response
			}
    	};
  });
  stream.on('error', function(error) {
    console.log(error);
  });
});

app.get('/*', function(req, res){  
  res.send('Hello World');
});

var server = app.listen(port, function(){  
  console.log('Server is listening on port ' + port);
});