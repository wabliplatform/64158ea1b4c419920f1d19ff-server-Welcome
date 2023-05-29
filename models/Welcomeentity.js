
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const welcomeentitySchema = new Schema({
Underscoreid:String , 


title:String 



})

module.exports = {
  Welcomeentity : mongoose.model('welcomeentity', welcomeentitySchema),
}

