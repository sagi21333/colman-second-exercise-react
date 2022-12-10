const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const product = new Schema({
  title: String,
  price: Number,
  imageUrl: String
},{ collection : 'products' })
 
module.exports = mongoose.model('product', product)
