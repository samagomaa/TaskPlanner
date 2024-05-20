import { Types, model } from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true,
        enum: ["toDo" , "doing" ,"done"],
        default:"toDo"
    },
    userID:{
        type:Types.ObjectId,
        ref:"user",
        required: true
    },
    assignTo:{
        type:Types.ObjectId,
        ref:"user"
    },
    deadline: String 
})

export const taskModel = model('task' , taskSchema)