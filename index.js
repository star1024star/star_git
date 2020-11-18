const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://star1024:star1234@starcluster.fjzup.mongodb.net/starCluster?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('mongo connected')).catch(err=>console.log(err))




app.get('/', (req, res) => res.send('Hello~~~안녕~~'))
app.listen(port, () =>console.log(`Example app listening on port ${port}!`))