var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8085;

// set the home page route
app.get('/', function(req, res){
   res.send('This Is Just A Play With Node Js');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});