var TwitterBot = require('node-twitterbot').TwitterBot;


  //Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    var Bot = new TwitterBot({
    	//secret sauce

		  });



    Bot.addAction("tweet", function(twitter, action, tweet) {
	  Bot.tweet("test tweet");
	});

	Bot.now("tweet");
















 //    var params = {
 //    	q: 'rainbow',
 //    	count: 2
 //    }


 //    tweetr.getSearch(
 //    	{'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}
 //    	, error, success, gotData());

 //    function gotData(err, data, response) {
 //    	var tweets = data.statuses;
 //    	for (var i = 0; i < tweets.length; i++) {
 //    		console.log(tweets[i].text);
 //    	}
 //    };


	// //twitter.getUserTimeline({ screen_name: 'realDonaldTrump', count: '10'}, error, success);


	// //twitter.stream('filter', {track: 'trump'}, function)

	// console.log('Hello world');