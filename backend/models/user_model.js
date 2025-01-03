import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8
    },
    followers : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",//takes from user model
            default : []
        }
    ],
    following : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",//takes from user model
            default : []
        }
    ],
    profileImg : {
        type : String,
        default : ""
    },
    coverImg : {
        type : String,
        default : ""
    },
    bio : {
        type : String,
        default : ""
    },
    link : {
        type : String,
        default : ""
    },
    likedPosts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Post",
            default : []
        }

    ]
    


},{
    timestamps : true
})

const User = mongoose.model("User" , UserSchema);
export default User;