// function doWork(data, callback){
//   callback('done');
// }
//
// function doWorkPromise(data){
//   return new Promise(function(resolve, reject){
//     resolve('everything worked');
//     // reject({
//     //   error: 'something bad happened',
//     // });
//
//   });
//
// }
//
// doWorkPromise('Some data').then(function(data){
//   console.log(data);
// }, function(error){
//   console.log(error);
// });
var request = require('request');

function getWeather(location){
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
}

getWeather('New York').then(function(currentWeather){
  console.log(currentWeather);
}, function(error){
  console.log(error);
});
