
var express = require('express');
var app = express();
var port = 8300;
var twitter = require('twitter');

var twit = new twitter({  
    consumer_key: 'c 2',
    consumer_secret: 'l r',
    access_token_key: '1 x',
    access_token_secret: 'Z Z'
});

var params = { follow: '1 ' }// set user id to who you want to respond to
var todaysTweets = [];
var data = require('fs').readFileSync('testgif.gif'); //upload image into root dir
 

twit.stream('statuses/filter', params,  function(stream) {
  stream.on('data', function(tweet) {

      	if (todaysTweets.indexOf(tweet.id_str) > -1) { //Checks to see if it was already responded too
    		console.log("Responded");
    	} else { 
    	console.log("These are todays tweets: " + todaysTweets);

				//respond with image OR GIF
					twit.post('media/upload', {media: data}, function(error, media, response) {
					  if (!error) {
					    console.log("Successful upload"); //console.log(media);
						    var status = {
						      status: 'Test gif response',
						      in_reply_to_status_id: tweet.id_str,
						      media_ids: media.media_id_string // Pass the media id string
						    }
					    twit.post('statuses/update', status, function(error, tweet, response) {
					      if (!error) {
					        console.log("The response with image was sent: " + tweet.text);
					        todaysTweets.push(tweet.id_str);
					      }
					    });
					  }
					});
				//end of respond with image


				//respond with normal tweet
				   //  		twit.post('statuses/update', 
				   //  			{status: "@dominickmalzone test embedded vid \n https://www.youtube.com/watch?v=GD4O-YPLcGo",
				   //  			 in_reply_to_status_id: tweet.id_str }
				   //  			, function(error, tweet, response) {
							//   if (!error) {
							//     console.log("This response was sent: " + tweet.text);
							//     todaysTweets.push(tweet.id_str);
							//   }
							// });
				//end of normal tweet
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