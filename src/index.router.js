import { connect } from "../DB/connectionDB.js";
import userRouter from "../src/modules/user/user.routes.js"
import taskRouter from "../src/modules/task/task.routes.js"
import { globalErrorHandling } from "./utils/errorHandling.js";


export const bootstrap = (app,express)=>{
    app.use(express.json())
    app.use("/user" , userRouter)
    app.use("/task" , taskRouter)
    app.all("*" , (req,res,next)=>{ next(new Error("invaild routing.."))})
    app.use(globalErrorHandling)
    connect()
}