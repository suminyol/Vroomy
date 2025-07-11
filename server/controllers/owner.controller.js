import imagekit from "../configs/imagekit.config.js";
import Car from "../models/Car.model.js";
import User from "../models/User.model.js";
import fs from "fs"

// Role change
export const changeRoleToOwner = async()=>{
    try {
        const{_id}=req.user;
        await User.findByIdAndUpdate(_id,{role:"owner"})
        res.json({success:true,message:"Now you can list cars"})
    } catch (error) {
        console.log(error.message);
         res.json({success:false,message:error.message})
    }
}

// list car

export const addCar = async (req,res)=>{
    try {
        const {_id}=req.user;
        let car = JSON.parse(req.body.carData)
        //console.log("Received car data:", car);

        const imageFile=req.file;
        const fileBuffer=fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:'/cars'
        })


               // optimization through imagekit url transformtion
        var optimizedImageUrl = imagekit.url({
        path : response.filePath,
        transformation : [
            {width: '1280'}, //width resize  
            {quality: 'auto'}, //auto compression
            {format: 'webp'} //convert to modern format
        ]
       });
        const image = optimizedImageUrl;
      const cars = await Car.create({...car, owner: _id, image})
       res.json({succes: true, cars})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }

}



//API to list Owner Car
export const getOwnerCars = async (req,res) =>{
    try {
        const {_id} = req.user;
        const cars = await Car.find({owner: _id})
        res.json({success: true, cars})
    } catch (error) {
        console.log(error.message); b 
        res.json({success: false, message: error.message}) 
    }
}