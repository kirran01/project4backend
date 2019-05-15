const express = require('express')
const parser = require('body-parser')
const PORT = process.env.PORT || 4000;
const app = express()
const cors = require('cors')

app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use('/api/plant', require('./controllers/plants'))


app.listen(PORT, () => console.log('Server running on port 4000!'))
