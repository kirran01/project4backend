const User = require('../models/User')
const users = require('../users.json')

User.deleteMany({}).then(() => {
    User.create(users)
        .then(newUser => {
            console.log(newUser)
        })
        .catch(err => {
            console.log(err)
        })
})