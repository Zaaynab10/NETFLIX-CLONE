const express =require("express")
const cors=require('cors')
const app=express()
const UserRouter = require('./UserRoutes')
require('dotenv').config()
const port = process.env.PORT
const uri=process.env.MONGO_URI
const mongoose=require('mongoose')

app.use(express.json)
app.listen(port , ()=>{
    console.log("bien connecté")
})
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("mongoose connecté")})
.catch((error)=>{
    console.log(error)
})

app.use('api/user',UserRouter)






