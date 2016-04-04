var apiKey = '6e8af89cc20c29c98b98aea3d431b910';
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=6e8af89cc20c29c98b98aea3d431b910';
var request = require('request');

module.exports = function(){
  request({
        url: url ,
        json: true,
      }, function(error, response, body){
        if (error) {
          console.log('unable to fetch weather');
        }
        else {
           console.log( 'it\' ' + body.main.temp + ' in ' + body.name);
        }
    });
};
