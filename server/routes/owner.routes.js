import express from "express"
import { protect } from "../middlewares/auth.middleware.js";
import { addCar, changeRoleToOwner, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailability, updateUserImage } from "../controllers/owner.controller.js";
import upload from "../middlewares/multer.middleware.js";

const ownerRouter=express.Router();

ownerRouter.post("/change-role",protect,changeRoleToOwner)
ownerRouter.post("/add-car",upload.single("image"),protect,addCar)
ownerRouter.get("/cars",protect,getOwnerCars)
ownerRouter.post("/toggle-car",protect,toggleCarAvailability)
ownerRouter.post("/delete-car",protect,deleteCar)
ownerRouter.get("/dashboard",protect,getDashboardData)
ownerRouter.post("/update-image",protect,upload.single('image'), updateUserImage)




export default ownerRouter