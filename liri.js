var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');


var Keys = require("./keys.js");
var twitterKeys = keys.twitterKeys;


function my-tweets() {
	fs.appendFile('./log.txt', 'User Command: node liri.js my-tweets\n\n', (err) => {
		if (err) throw err;
    });

    var client = new Twitter(twitterKeys);

    var params = {screen_name: 'tracking_tobes', count: 20};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (error) {
			var errorStr = 'ERROR: Retrieving tweets -- ' + error;

			fs.appendFile('./log.txt', errorStr, (err) => {
				if (err) throw err;
				console.log(errorStr);
			});
			return;
		} else {
			var outputStr = '------------------------\n' +
							'Tweets:\n' + 
							'------------------------\n\n';

			for (var i = 0; i < tweets.length; i++) {
				outputStr += 'Created: ' + tweets[i].created_at + '\n' + 
							 'Content: ' + tweets[i].text + '\n' +
							 '------------------------\n';
			}

			fs.appendFile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {
				if (err) throw err;
				console.log(outputStr);
			});
		}
	});
}
    

var spotify-this-song

	fs.appendFile('./log.txt', 'node liri.js spotify-this-song ' + song + '\n\n', (err) => {
		if (err) throw err;
	});

    search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
	if (song === '') {
		search = 'The Sign Ace Of Base';
	} else {
		search = song;
	}

var movie-this

var do-what-it-says

