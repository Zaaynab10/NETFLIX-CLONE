const express =require("express")
const addToLikedMovies=require("./UserControllers")
const UserRouter = express.Router()

UserRouter.post('/add' , addToLikedMovies)




module.exports=UserRouter