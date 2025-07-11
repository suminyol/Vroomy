import express from "express"
import { protect } from "../middlewares/auth.middleware.js";
import { addCar, changeRoleToOwner } from "../controllers/owner.controller.js";
import upload from "../middlewares/multer.middleware.js";

const ownerRouter=express.Router();

ownerRouter.post("/change-role",protect,changeRoleToOwner)
ownerRouter.post("/add-car",upload.single("image"),protect,addCar)


export default ownerRouter