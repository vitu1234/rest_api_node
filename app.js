const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
const postsRoute = require('./routes/posts')

const app = express()

//middleware which runs for all our routes
app.use(bodyParser.json())
app.use(cors())

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('Connected to db')
})


//middlewares | imagine as if it were functions which get executed when a route is hit
app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})




//START SERVER AND START LISTENING
app.listen(3000)