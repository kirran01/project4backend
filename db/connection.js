const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/p4db', { useNewUrlParser: true })

if (process.env.NODE_ENV == 'production') {
    mongoose.connect(process.env.DB_URL)
} else {
    mongoose.connect('mongodb://localhost/p4db')
}

mongoose.Promise = Promise

module.exports = mongoose