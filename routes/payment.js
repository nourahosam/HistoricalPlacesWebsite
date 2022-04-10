var express = require('express');
var router = express.Router();
var path = require('path');
const {MongoClient} = require("mongodb");
const url = "mongodb+srv://noura:noura@cluster0.gh3p9.mongodb.net/cloudProject?retryWrites=true&w=majority";
/* GET home page. */


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/payment.html'));
});

MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
    /* GET users listing. */

    router.post('/', (req, res) => {

        console.log("req.body.user1")


        console.log('Connected to Database')
        const db = client.db('cloudproject')
        const profileCollection = db.collection('payment')

        console.log("post")
        profileCollection.findOne({ user_name: req.query.user1, password: req.body.pass1 }).then(result => {

        }).catch(error => console.error(error))
        console.log(req.body.user1);


    })
});


module.exports = router;