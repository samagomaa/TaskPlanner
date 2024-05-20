import { Error } from "mongoose"

export const asyncHandle = (fn)=>{
    return (req,res,next)=>{
        return fn(req,res,next).catch((err)=>{
            return next(new Error(err.message , {cause : err.cause})) 
            //the next() will go to the last middle ware
        })
    }
}


export const globalErrorHandling = (err , req , res , next)=>{
    err.cause = err.cause || 500;
    return res.status(err.cause).json({success: false , message : err.message})
}