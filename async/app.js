var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Location to fetch weather for',
        type: 'string'
    })
    .help('help')
    .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
    console.log('Location was provided');
    weather(argv.l).then(function(currentWeather){
      console.log(currentWeather);
    }).catch(function(error){
      console.log(error);
    });
} else {
    console.log('Location was not provided');
    location().then(function(locationInfo) {
        return weather(locationInfo.city);
    }).then(function(weatherMessage) {
        console.log(weatherMessage);
    }).catch(function(error) {
        console.log(error);
    });
}
