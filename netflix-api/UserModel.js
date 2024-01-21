const mongoose =require("mongoose")
const UserSchema = new mongoose.Schema({
    Email : {
        type:String,
        unique:true,
        trim:true,
        required:true, match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        max:30,
    },

    LikedMovies:{
        type:Array,

    }
})
module.exports = mongoose.model('UserModel',UserSchema)