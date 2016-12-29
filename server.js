// Following a scotch.io tutorial.
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path'),
    port = 3030;

// Parses urlencoded bodies. Extended: true tells it to parse extended syntax with the qs module. Apparently this allows for a more JSON like experience.
app.use(bodyParser.urlencoded({ extended: true }));
// Parses JSON
app.use(bodyParser.json());

// I'm pretty sure all the following could be replaced by using cors but I don't want to throw off the flow of the tutorial so I'm just going with what they've got.
// All it's doing is setting the headers.
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

// Morgan is used for logging request details.
app.use(morgan('dev'));

app.use(express.static(__dirname + '/src'));

app.get('/users', function(req, res, next) {
  res.json({username: "Steven"});
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});


app.listen(port, function() {
  console.log("Listening on port ", port);
})
