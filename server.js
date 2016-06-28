
var express = require('express');
var app = express();
var port = 8300;
var twitter = require('twitter');

var twit = new twitter({  
    consumer_key: 'c 2',
    consumer_secret: 'l r',
    access_token_key: '16 x',
    access_token_secret: 'Zi DZ'
});


var params = {
    follow: '16 0' // set user id to who you want to respond to
}
 


var todaysTweets = [];
 

twit.stream('statuses/filter', params,  function(stream) {
  stream.on('data', function(tweet) {
      	if (todaysTweets.indexOf(tweet.id_str) > -1) { //Checks to see if it was already responded too
    		console.log("Responded");
    	} else { 
    	console.log("These are todays tweets: " + todaysTweets);
    		twit.post('statuses/update', 
    			{status: "@dominickmalzone fixed test response",
    			 in_reply_to_status_id: tweet.id_str }
    			, function(error, tweet, response) {
			  if (!error) {
			    console.log("This response was sent: " + tweet.text);
			    todaysTweets.push(tweet.id_str);
			  }
			});
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