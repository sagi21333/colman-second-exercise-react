const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const shopingList = new Schema({
  products: String,
  fullName: String,
  phoneNumber: String,
  address: String
},{ collection : 'shopingLists' })
 
module.exports = mongoose.model('shopingList', shopingList)
