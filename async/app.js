var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
  .command('location', 'location of user', function(yargs){
    yargs.options({
      location: {
        alias: 'l',
        description: 'location of user',
        demand: true,
        type: 'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;

var command = argv._[0];

weather(function(currentWeather){
  console.log(currentWeather);
});

location(function(location){
  if (!location) {
    console.log('unable to guess location');
  }
  else {
    console.log('city: ' + location.city );
    console.log('long/lat: ' + location.loc );
  }

});

if (command === 'location') {
  console.log('location entered: ' + argv.location);
}
