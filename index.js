const express = require('express')
const parser = require('body-parser')
const PORT = process.env.PORT || 4000;
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/user', require('./controllers/user'))


app.listen(PORT, () => console.log('Server running on port 4000!'))
