var express = require('express');
const mongoose = require('mongoose')
const ProductsController = require('../controllers/products')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/products', ProductsController.get);
 
module.exports = router;