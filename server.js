
var express = require('express');
var app = express();
var port = 8300;
var twitter = require('twitter');

var twit = new twitter({  
    consumer_key: 'c	2',
    consumer_secret: 'lm	xr',
    access_token_key: '16	Qx',
    access_token_secret: 'Zi	XDZ'
});


var params = {
    follow: '1666332390' // set user id to who you want to respond to
}
// 	
//	

//	

//var recentId = "";
//console.log("this is empty id: " + recentId)
// var responseParams = {
// 	status: "@dominickmalzone response",
// 	in_reply_to_status_id: recentId,
// }


twit.stream('statuses/filter', params,  function(stream) {
  stream.on('data', function(tweet) {
    //console.log("this is tweet id: " + tweet.id_str);
    //var recentId = tweet.id_str //set var to tweet you grab from stream
  
    	if (tweet.id_str != undefined) { //if it wasnt someone deleteing a a tweet, this was a never ending loop though lol
    		twit.post('statuses/update', 
    			{status: "@dominickmalzone response",
    			 in_reply_to_status_id: tweet.id_str }
    			, function(error, tweet, response) {
			  if (!error) {
			    console.log("This response was sent: " + tweet.text);
			    tweet.id_str = undefined;
			    console.log("Set to undefined");
			  }
			});
    	};
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});


//Just one basic server response, to make sure our server is working.
app.get('/*', function(req, res){  
  res.send('Hello Cool World');
});

//Let's start up our server listening on our port:
var server = app.listen(port, function(){  
  console.log('Server is listening on port ' + port);
});