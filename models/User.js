
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
Underscoreid:String , 


firstName:String 



})

module.exports = {
  User : mongoose.model('user', userSchema),
}

