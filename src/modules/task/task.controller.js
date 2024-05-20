import { taskModel } from "../../../DB/models/task.model.js";


//add task
export const addTask = async (req, res, next) => {
    const { title, description, status, assignTo, deadline } = req.body;
    await taskModel.create({
        title,
        description,
        status,
        userID: req.user._id,
        assignTo,
        deadline
    })
    res.status(200).json({ success: true, message: "task added successfully..." })
}

//update task
export const updateTask = async (req, res, next) => {
    const taskExistAndOwner = await taskModel.find({ _id: req.params.id, userID: req.user._id })
    if (taskExistAndOwner.length == 0) {
        return next(new Error("task not found or you don't have access.."))
    } else {
        const updatedTask = req.body
        let updatedDocument = await taskModel.findByIdAndUpdate(req.params.id, updatedTask, { new: true })
        res.status(200).json({ succes: true, updatedDocument })
    }

}

//delete task 
export const deleteTask = async(req,res,next)=>{
    const taskExistAndOwner = await taskModel.find({ _id: req.params.id, userID: req.user._id })
    if (taskExistAndOwner.length == 0) {
        return next(new Error("task not found or you don't have access.."))
    } else {
        const deletedTask = req.body
        let deletedDocument = await taskModel.findByIdAndUpdate(req.params.id, deletedTask, { new: true })
        res.status(200).json({ succes: true, deletedDocument })
    }

}

//get all tasks for user data
export const getUserTasks = async(req,res,next)=>{
    const userTasks = await taskModel.find({$or : [{userID : req.user._id} , {assignTo : req.user._id} ]})
    if(userTasks.length == 0 ){
        return res.json({success: true , message: "this user does not have tasks.."})
    }else{
        return res.json({success: true , userTasks})
    }
}

//get all tasks not done after deadline 
export const deadlinTasks = async(req,res,next)=>{
    const deadTasks = await taskModel.find({ status : {$ne:"done"} , deadline:{$lte: new Date()} })
    if(deadTasks.length == 0 ){
        return res.json({success: true , message: "there is no task.."})
    }else{
        return res.json({success: true , deadTasks})
    }
}