import { userModel } from "../../../DB/models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Error } from "mongoose";

//signup
export const signUp = async (req,res,next)=>{
        const user = req.body
        const newUser = await userModel.create(user)
        res.json({
            success: true , 
            message:"user added successfully...",
            result : newUser
        })
}

//sign in 
export const signIn = async (req,res,next)=>{
        const {email , password} = req.body
        const user = await userModel.findOne({email})
        if(!user && !bcrypt.compareSync(password , user.password)){
            next(new Error("wrong email or password..."))
        }
        let token = jwt.sign({email: user.email , id : user.id} , process.env.SECRET_KEY)
        await userModel.findByIdAndUpdate(user._id , {isActive: true , isDeleted : false} , {new:true})
            res.json({
                success: true,
                message : "user sign in successfully",
                userToken:token
            })
}

// update password
export const updatePassword = async (req,res,next)=>{
        const {password} = req.body
        const newPassword = await userModel.findByIdAndUpdate(req.params.id , {password : `${password}`} , {new:true})
        res.json({
            success:true,
            message:"password updated successfully",
            newPassword : newPassword.password
        })
}

//update user 
export const updateUser = async (req,res,next)=>{
        const identifier = req.body
        const newUser = await userModel.findByIdAndUpdate(req.params.id , identifier , {new: true})
        res.json({
            success:true,
            message: "user updated successfully",
            newUser: newUser
        })
}

//delete user
export const deleteUser = async (req,res,next)=>{
        const deletedUser = await userModel.findByIdAndDelete(req.params.id)
    if(!deletedUser){ next(new Error("failed to delete user"))}
    else{
        res.json({
            success: true,
            message:"user deleted successfully",
            deletedUser: deletedUser
        })
    }
}

//softDelete
export const softDelete = async(req,res,next)=>{
    await userModel.findByIdAndUpdate(req.user._id ,{isActive: false , isDeleted : true} , {new:true})
    res.status(200).json({success:true})
}

//logout
export const logout = async(req,res,next)=>{
    await userModel.findByIdAndUpdate(req.user._id ,{isActive: false} , {new:true})
    res.status(200).json({success:true})
}

