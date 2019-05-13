const Plant = require('../models/Plant')
const plants = require('../plants.json')

Plant.deleteMany({}).then(() => {
    Plant.create(plants)
        .then(newPlant => {
            console.log(newPlant)
        })
        .catch(err => {
            console.log(err)
        })
})