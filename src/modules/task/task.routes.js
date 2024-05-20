import { Router } from "express";
import * as taskController from "./task.controller.js"
import { asyncHandle } from "../../utils/errorHandling.js";
import { auth } from "../../middleware/auth.js";

const router = Router();

router.post("/addTask" , auth , asyncHandle(taskController.addTask))
router.put("/updateTask/:id" , auth , asyncHandle(taskController.updateTask))
router.delete("/deleteTask/:id" , auth , asyncHandle(taskController.deleteTask))
router.get("/getUserTasks" , auth , asyncHandle(taskController.getUserTasks))
router.get("/deadlinTasks" , auth , asyncHandle(taskController.deadlinTasks))



export default router;