
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserUserImageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { UserUserImageSchema };

