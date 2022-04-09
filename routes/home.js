var express = require('express');
var router = express.Router();
var path = require('path');
const MongoClient = require("mongodb");
const url = "mongodb+srv://noura:noura12@cluster0.sjq3a.mongodb.net/cloud project?retryWrites=true&w=majority";
/* GET home page. */


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/Home.html'));
});



module.exports = router;