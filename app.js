var express = require('express')
var createError = require('http-errors');
var path = require('path');
//var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var bodyparser = require('body-parser');

var app = express();


app.use(bodyparser.json());
var urlencodedparser = bodyparser.urlencoded({ extended: true })

app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.static(__dirname + '/views'));
//app.use(logger('dev'));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect database


var home = require('./routes/home');
var login = require('./routes/login');
var reservation = require('./routes/reservation');
var resTours = require('./routes/reservedTours');
var Tours = require('./routes/Tours');
var Translator = require('./routes/Translator');
var signup = require('./routes/signup');
var payment = require('./routes/payment');

app.use('/', home);
app.use('/login', login);
app.use('/reservation', reservation);
app.use('/restours', resTours);
app.use('/Tours', Tours);
app.use('/translator', Translator);
app.use('/signup', signup);
app.use('/payment', payment);


app.listen(4000, () => {
    console.log("listening on port 4000");
})

module.exports = app;