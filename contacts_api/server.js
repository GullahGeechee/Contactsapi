const express = require('express')
require('dotenv').config() 
const morgan = require('morgan')
const helmet = require('helmet')
const { default: mongoose } = require('mongoose')
const mongoConfig = require('./config/mongoConfig')
const contactsRouter = require('./routes/contactsRouter')
const userRouter = require('./routes/userRouter') 




const app = express()
const PORT = 10000

//*middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())




//routes 
app.use('/contacts', contactsRouter)
app.use('/users', userRouter)

//* Root Route
app.get('/', (req, res) =>{
    res.status(200).json('Welcome to my API')
})








app.listen(PORT, () => {
    console.log(`RUN PORT RUN`)
})