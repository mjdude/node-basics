var express = require('express');
var app = express();
var port = 3000;

app.get('/about', function(req, res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('express server started on port ' + port);

});
