import { Schema, model } from "mongoose";



const userSchema = new Schema({
    userName: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true,
        unique : true
    },
    password : {
        type:String,
        required : true
    },
    age : {
        type:Number,
        required : true
    },
    gender: {
        type:String,
        required : true,
        enum:["female" , "male"]
    },
    phone: {
        type:String,
        required : true
    },
    isActive : { 
        type: Boolean,
        default: false,
    },
    isDeleted : { 
        type: Boolean,
        default: false,
    }
},
{ timestamps: true })

export const userModel = model("user" , userSchema)