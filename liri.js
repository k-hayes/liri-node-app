var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var nodeArgs = process.argv;

var fs = require('fs');

fs.writeFile("random.txt", spotify-this-song,"I Want it That Way", function(err) {
	
		// If the code experiences any errors it will log the error to the console.
		if (err) {
			return console.log(err);
		}

var Keys = require("./keys.js");
var twitterKeys = keys.twitterKeys;

var inputString = process.argv;


function my-tweets () {
	var params = {screen_name: 'tracking_tobes' count: 20};
	client.get('statuses/user_timeline', params, function(err, tweets, response) {
	  if (!err) {
		console.log(tweets);
	  }
	});
}

function spotify-this-song () {
	
	var spotify = new Spotify({
		id: c2724d21bf864d60917fe13b21e312aa,
		secret: 1907ef4c5e204738a68c7522b1055788
	  });
	   
	  spotify.search({ type: 'track', query: inputString[2] }, function(err, data) {
		if (err) {
			spotify.search({ type: 'track', query: 'I Saw The Sign' };
		}
	   
	  console.log(data); 
	  });
}

function movie-this () {
	var movieName = "";
	for (var i = 2; i < nodeArgs.length; i++) {
		
			if (i > 2 && i < nodeArgs.length) {
		
				movieName = movieName + "+" + nodeArgs[i];
		
			}
		
			else {
		
				movieName += nodeArgs[i];
		
			}
		}
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

	console.log(queryUrl);
	
	request(queryUrl, function(error, response, body) {
	  if (!error && response.statusCode === 200) {
			console.log("The movie's Title is: " + JSON.parse(body).Title);			
			console.log("Release Year: " + JSON.parse(body).Year);
			console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
			console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).tomatoUserRating);
			console.log("Country of Origin: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
			
			
		}
	});			
}

function do-what-it-says () {
	fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
		}
		var dataArr = data.split(",");
		
}
