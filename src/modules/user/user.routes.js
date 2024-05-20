import { Router } from "express";
import * as userController from './user.controller.js'
import { checkEmailExist } from "../../middleware/checkemailexist.js";
import { hashPassword } from "../../middleware/hashpassword.js";
import { auth } from "../../middleware/auth.js";
import { asyncHandle } from "../../utils/errorHandling.js";

const router = Router();

router.post("/signup" , checkEmailExist , hashPassword , asyncHandle(userController.signUp))
router.post("/signin" , asyncHandle(userController.signIn))
router.put("/updatepassword/:id", auth , hashPassword , asyncHandle(userController.updatePassword))
router.put("/updateuser/:id", auth , asyncHandle(userController.updateUser))
router.delete("/deleteuser/:id", auth , asyncHandle(userController.deleteUser))
router.put("/softDelete", auth , asyncHandle(userController.softDelete))
router.put("/logout", auth , asyncHandle(userController.logout))

export default router 