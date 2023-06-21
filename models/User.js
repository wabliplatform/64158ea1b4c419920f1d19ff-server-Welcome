
const { UserUserImageSchema } =require('./UserUserImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
Underscoreid:String , 


userName:String , 


userImage:  
UserUserImageSchema
 



})

module.exports = {
  User : mongoose.model('user', userSchema),
}

