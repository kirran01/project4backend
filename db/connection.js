const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
} else {
    mongoose.connect('mongodb://localhost/p4db', { useNewUrlParser: true })
}

mongoose.Promise = Promise

module.exports = mongoose