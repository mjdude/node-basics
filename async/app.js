var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
  .command('location', 'location of user', function(yargs){
    yargs.options({
      location: {
        alias: 'l',
        description: 'location of user',
        demand: false,
        type: 'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;

var command = argv._[0];

// location(function(location){
//   if (!location) {
//     console.log('unable to guess location');
//   }
//   else {
//     console.log('city: ' + location.city );
//     console.log('long/lat: ' + location.loc );
//   }

// });

if (command === 'location') {
  console.log('location entered: ' + argv.location);
  weather(argv.location ,function(currentWeather){
    console.log(currentWeather);
  });
}
else {
  location(function(location){
    weather(location.city ,function(currentWeather){
      console.log(currentWeather);
    });
  });
}
