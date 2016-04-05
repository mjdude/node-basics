var apiKey = '6e8af89cc20c29c98b98aea3d431b910';
var request = require('request');


module.exports = function (location) {
	return new Promise(function(resolve, reject){
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=metric&APPID=6e8af89cc20c29c98b98aea3d431b910';

		if (!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
};
