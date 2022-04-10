var express = require('express');
var router = express.Router();
var path = require('path');
const {MongoClient} = require("mongodb");
const url = "mongodb+srv://noura:noura@cluster0.gh3p9.mongodb.net/cloudProject?retryWrites=true&w=majority";
/* GET home page. */


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/Home.html'));
});



module.exports = router;