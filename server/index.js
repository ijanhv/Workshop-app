require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workshopRoute = require('./routes/workshopRoute')

const app = express()

// const User = require('./models/userSchema.js')

//middleware
app.use(express.json());

// app.use(cookieParser())

app.use((req, res, next) => {
    // console.log(req.path, req.method);
    next();
})


app.use('/workshop', workshopRoute)



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listen on port 4000
        app.listen(8000, () => {
            console.log(`Connected to Mong0DB and Listening on Port 8000`)
        })
    }).catch((error) => {
        console.log(error)
    })

