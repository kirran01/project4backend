const express = require('express')
const router = express.Router()
const User = require('../models/User.js')

//get a single plant
router.post('/login', function (req, res) {
    console.log(req.body);
    User.findOne(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))

})

router.get('/user/:userId', function (req, res) {
    console.log(req.params.userId)
    User.findOne({ _id: req.params.userId })
        .then(user => res.json(user))
        .catch(err => res.json(err))

});

//get all plants
router.post('/signup', function (req, res) {
    console.log('signup', req.body);
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))

})

router.get("/id/:userId", function (req, res) {
    User.findOne({ _id: req.params.userId })
        .then(user => res.json(user))
        .catch(err => res.json(err))

})

router.get('/', (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
        ;
})

//delete a user
router.delete('/:email', function (req, res) {
    User.deleteOne({ email: req.params.email })
        .then(destroyed => res.json(req.params.email + 'succesfully deleted'))
        .catch(err => res.json(err))

})

router.put('/deletePost', function (req, res) {
    User.update({ _id: req.body.id }, {
        $pullAll: { posts: [req.body.post] }
    })
        .then(updated => res.json('successfully deleted post'))
        .catch(err => res.json(err))

})

// update user posts
router.put('/updateposts/:id', function (req, res) {
    console.log(req.body)
    User.updateOne({ _id: req.params.id }, {
        $addToSet: { posts: req.body.post }
    })
        .then(updated => {
            console.log(updated)
            res.json(updated)
        })
        .catch(err => res.json(err))

})

module.exports = router