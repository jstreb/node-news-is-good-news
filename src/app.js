var env = process.env.NODE_ENV || 'development';
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var config = require('./configs')[env];
var mongo = require("./models/mongo");
var middleware = require('./middleware/middleware');

var app = express();

mongo.connect(config.mongodb, function(err) {
  if (err) {
    throw err;
  }
  console.info('Connected to Mongo');
});

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(middleware.defaultCallbacks);
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

routes( app );

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
