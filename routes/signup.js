var express = require('express');
var router = express.Router();
var path = require('path');
const {MongoClient} = require("mongodb");
const url = "mongodb+srv://noura:noura@cluster0.gh3p9.mongodb.net/cloudproject?retryWrites=true&w=majority";
/* GET home page. */


/* GET users listing. */
router.get('/', (req, res, next) => {
    console.log('get of signup');
    res.sendFile(path.join(__dirname, '../views/signup.html'));
});

// router.post('/signup', (req, res) => {
//     console.log("wsalt");
// });

router.post('/', (req, res, next) => {
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
    });

});
module.exports = router;