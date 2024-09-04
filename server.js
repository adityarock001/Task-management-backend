const express = require('express')
require('dotenv').config()
const connection = require('./src/db/connect')
const taskRoute = require('./src/routes/taskRoute')


const app = express()

app.use(express.json())
app.use('/', taskRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})