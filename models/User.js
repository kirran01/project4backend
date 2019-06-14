const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String,
    password: String,
    posts: [String]

})

module.exports = mongoose.model('User', userSchema)