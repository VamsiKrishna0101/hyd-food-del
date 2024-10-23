import Foodmodel from "../models/FoodModel.js";
import fs from 'fs';

// Add item
const addfood = async (req, res) => {
    const image_filename = req.file.filename;
    const food = new Foodmodel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.status(201).json({ success: true, message: "Food item added" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Food item not added", error: err.message });
    }
};
const listfood=async (req,res)=>{
    try{
        const alldata=await Foodmodel.find({})
        res.json({success:true,data:alldata})
    }
    catch(err){
        res.json({success:false,message:"Error listing data"})
    }
}
const removefood=async (req,res)=>{
    try{
        const food=await Foodmodel.findById(req.body.id)
        fs.unlink(`uploads/${Foodmodel.image}`,()=>{})

        await Foodmodel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"deleted"})
    }
    catch(err){
        res.json({success:false,message:"Not Deleted"})
    }
}
export { addfood,listfood,removefood};
