const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5555
const connectDB = require("./config/db")
// const {errorHandler} = require('./backend/middleware/errorMiddleware')
const cors = require('cors')

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Option 1 -- Allow all origins with default of cors(*)
// app.use(cors())

//Option 2 -- Allow  custom origins
app.use(
    cors({
        origin: ' https://book-mart-fs.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
        credentials: 'true'
    })
)

app.use('/books', require('../backend/routes/bookRoutes'))

// app.use(errorHandler)//express errorHandler

app.listen(port, () => console.log(`On PORT ${port}`))
