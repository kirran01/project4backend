const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://joey0:joey1234@ds237357.mlab.com:37357/project4db`, { useNewUrlParser: true }, err => {
    if (err) return console.log(err);
    return console.log('Connected to mLab DB');
});

// if (process.env.NODE_ENV == 'production') {
//     mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
// } else {
//     mongoose.connect('mongodb://localhost/p4db', { useNewUrlParser: true })
// }

const db = mongoose.connection;

module.exports = db