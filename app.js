const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const post = require('./routes/post')
const login = require('./routes/login')

const app = express()
const port = 4000

app.use(express.json())
app.use('/user',user)
app.use('/post',post)
app.use('/login',login)

const url = 'mongodb://localhost/facebook'

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection

con.on("open",()=>{
    console.log("MongoDB is connected!");
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
}) 