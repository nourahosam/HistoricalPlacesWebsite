var express = require('express');
var router = express.Router();
var path = require('path');
const MongoClient = require("mongodb");
const url = "mongodb+srv://noura:noura12@cluster0.sjq3a.mongodb.net/cloud project?retryWrites=true&w=majority";

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/reservation.html'));
});

router.post('/', (req, res) => {

    console.log("req.body.user1")

    MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
        console.log('Connected to Database')
        const db = client.db('cloudproject')
        const profileCollection = db.collection('reservation')

        console.log("post")
        profileCollection.insertOne({ username: req.query.user, phonenumber: req.body.phonenumber, tour: req.query.tour, hotel: req.query.hotel, Numberofpeople: req.query.people, Numberofdays: req.query.days, Transportation: req.query.comp, Startdate: req.query.day, Nationality: req.query.nat }).then(result => {

        }).catch(error => console.error(error))

    });

});



module.exports = router;