import jwt from "jsonwebtoken";
import { Error } from "mongoose";
import { userModel } from "../../DB/models/user.model.js";
import { asyncHandle } from "../utils/errorHandling.js";


export const auth = asyncHandle(async (req, res, next) => {
    const token = req.headers.token
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    if(!decoded?.id){
        return next( new Error("invalid token" , {cause: 404}))
    }
    const user = await userModel.findById(decoded.id)
    if(!user?.isActive){
        return next(new Error("user not found" , {cause:400}))
    }
    req.user = user;
    return next();
}) 