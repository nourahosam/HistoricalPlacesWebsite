var express = require('express');
var router = express.Router();
var path = require('path');
const {MongoClient} = require("mongodb");
const url = "mongodb+srv://noura:noura@cluster0.gh3p9.mongodb.net/cloudProject?retryWrites=true&w=majority";
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/Tours.html'));


});

module.exports = router;