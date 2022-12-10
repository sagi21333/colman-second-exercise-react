var express = require('express');
const mongoose = require('mongoose')
const ShopingListController = require('../controllers/shopingList')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/addShopingList', ShopingListController.put);
 
module.exports = router;