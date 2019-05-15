const express = require('express')
const router = express.Router()
const Plant = require('../models/Plant.js')

//get a single plant
router.get('/plantName/:regularName', function (req, res) {
    Plant.findOne({ regularName: req.params.regularName })
        .then(plant => res.json(plant))
        .catch(err => console.log(err))
})

//get all plants
router.get('/plants', function (req, res) {
    Plant.find({})
        .then(plants => res.json(plants))
        .catch(err => console.log(err))
})

//create a plant
router.post('/', function (req, res) {
    Plant.create(req.body)
        .then(plant => res.json(plant))
        .catch(err => console.log(err))
})

//delete a plant
router.delete('/:regularName', function (req, res) {
    Plant.deleteOne({ regularName: req.params.regularName })
        .then(destroyed => res.json(req.params.regularName + 'succesfully deleted'))
        .catch(err => console.log(err))
})

// update a plant
router.put('/updateplant', function (req, res) {
    Plant.update({ regularName: req.body.regularName }, {
        $set: req.body
    })
        .then(updated => res.json('sucessfully updated'))
        .catch(err => console.log(err))
})

module.exports = router