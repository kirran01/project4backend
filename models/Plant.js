const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const plantSchema = new Schema({
    regularName: String,
    height: String,
    bares: String,
    origin: String
})

module.exports = mongoose.model('Plant', plantSchema)