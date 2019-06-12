const express = require('express')
const router = express.Router()
const User = require('../models/User.js')

//get a single plant
router.post('/login', function (req, res) {
    console.log(req.body);
    User.findOne(req.body)
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

router.get('/user/:userId', function (req, res) {
    console.log(req.params.userId)
    User.findOne({ _id: req.params.userId })
        .then(user => res.json(user))
        .catch(err => console.log(err))

});

//get all plants
router.post('/signup', function (req, res) {
    console.log('signup', req.body);
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

router.get("id/:userId", function (req, res) {
    User.findOne({ _id: req.params.userId })
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

//delete a plant
router.delete('/:email', function (req, res) {
    User.deleteOne({ email: req.params.email })
        .then(destroyed => res.json(req.params.email + 'succesfully deleted'))
        .catch(err => console.log(err))
})

// update user posts
router.put('/updateposts/:id', function (req, res) {
    console.log(req.body)
    User.updateOne({ _id: req.params.id }, {
        $push: { posts: req.body.post }
    })
        .then(updated => res.json('sucessfully updated'))
        .catch(err => console.log(err))
})

module.exports = router