var express = require('express')
var createError = require('http-errors');
var path = require('path');
//var cookieParser = require('cookie-parser');
// var logger = require('morgan');


var app = express();



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
//app.use('/signup', signup);
app.use('/payment', payment);

const {MongoClient} = require("mongodb");
const url = "mongodb+srv://noura:noura@cluster0.gh3p9.mongodb.net/cloudproject?retryWrites=true&w=majority";
/* GET home page. */


/* GET users listing. */
app.get('/signup', (req, res, next) => {
    console.log('get of signup');
    res.sendFile(path.join(__dirname, 'views/signup.html'));
});

// router.post('/signup', (req, res) => {
//     console.log("wsalt");
// });

app.post('/signup', (req, res, next) => {
    console.log('post of signup');
    console.log("__________________________________Req");
    console.log(req);
    
    console.log("__________________________________Res");
    console.log(res);

    MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
        console.log('Connected to Database');
        const db = client.db('cloudproject');
        const profileCollection = db.collection('profile');
        console.log(req.body);
        console.log("post");
        profileCollection.insertOne({ user_name: req.query.user1, password: req.body.pass1, email: req.body.email2, gender: "req.body.gender", PhoneNumber: req.body.phone2 }).then(result => {

        }).catch(error => console.error(error));
        res.redirect('/login');
    })
});
app.listen(4000, () => {
    console.log("listening on port 4000");
});

module.exports = app;