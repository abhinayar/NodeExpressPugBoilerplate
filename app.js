/*
*
*
NODE JS BOILERPLATE
------------------------
Barebones NodeJS project, for rapid prototyping of web projects
Set up to be pushed to Heroku, not sure about other env's
Wanted something with limited deps. to just grab and go
Might not be useful for too many, but sure as heck is useful for me...
*
Uses Express, Pug, and includes one basic route in the routing file
Includes the following on the front end in the view:
  // Meta
  Responsive Tags
  Icons
  OG meta tags
  Twitter meta tags
  // Fonts
  Google Fonts - Roboto
  // CSS
  Normalize (and local fallback)
  Bootstrap 4 (and local fallback)
  Local PREFETCH CSS (with basic styles to prevent FOUC)
  Local CSS (with media queries)
  // JS
  jQuery (and local fallback)
  Modernizr (and local fallback)
  Console-Shim
  Local JS
  // Suggestions
  Google Analytics
  Facebook Analytics
*
*
*
If you have any questions about the underlying code please contact the developer
at abhishek[dot]nayar[at]yale[dot]edu
*
*
*/

// import dependencies
var express = require('express'), // Used for routing https://expressjs.com/
path = require('path'), // allows path combinations https://www.npmjs.com/package/path
favicon = require('serve-favicon'), // serves the favicon from spec. folder https://www.npmjs.com/package/serve-favicon
logger = require('morgan'), // logs errors and output to terminal during node run https://www.npmjs.com/package/morgan
cookieParser = require('cookie-parser'), // allows cookie parsing https://www.npmjs.com/package/cookie-parser
bodyParser = require('body-parser'), // allos parsing of req.body in POST requests https://www.npmjs.com/package/body-parser
session = require('express-session'), // express session storage... just using in-memory sessions https://www.npmjs.com/package/express-session
pug = require('pug'), // pug/jade templating language https://www.npmjs.com/package/pug
timeout = require('connect-timeout'), // sets the timeout on the app before we show error https://www.npmjs.com/package/timeout
compression = require('compression'), // gzip compression for nodejs https://www.npmjs.com/package/compression
port = process.env.PORT || 3000;

// import local dependencies
require('dotenv').config(); // loads CONFIG variables from the .env top-level file

// app internal setup
var app = express(); // sets app to use express
app.set('views', path.join(__dirname, 'views')); // sets up view directory
app.set('view engine', 'pug'); // sets view engine to use pug
app.use(favicon(path.join(__dirname, 'public', 'images', 'icons', 'favicon-96.png'))); // sets favicon path
app.use(logger('dev')); // uses morgan/logger to log output to terminal
app.use(bodyParser.json()); // uses bodyParser to parse req
app.use(bodyParser.urlencoded({ extended : true })); // Parses the text as URL encoded data, extended extends UTF chars
app.use(cookieParser('secret')); // sets the session secret
// set up session storage (we dont really need this for this app, no login)
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(express.static(path.join(__dirname, 'public'))); // sets static file directory path
app.use(compression()); // uses compression
app.use(timeout('100s')); // sets timeout interval

// set up routing
var routes = require('./routes');
app.use('/', routes);

// error catching
// stacktrace in dev., dislay error page in prod
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error: ' + err.message + ' | ' + err);
  });
}
app.use(function (err, req, res, next) { // eslint-disable-line no-unused-vars
  res.status(err.status || 404);
  // log the error for heroku logs
  console.log('error', err);
  res.render('error', {});
});

// serve the app on PORT variable
// if using Heroku, this will be automatically set
// AWS/Azure I'm not sure : TODO
var server = app.listen(port, function(err) {
  if (err) {
    console.log('App listening error ', err);
  } else {
    console.log('App running at ', port)
  }
});
