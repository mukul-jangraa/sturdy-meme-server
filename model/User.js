const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String},
  email: {type: String},
  mobile: {type: String},
  password: {type: String},
  profile_picture: {type: String}
})

module.exports = mongoose.model('User', UserSchema)