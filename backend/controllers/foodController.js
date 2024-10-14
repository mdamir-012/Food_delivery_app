const { foodModel } = require("../models/foodModel");
const fs =require("fs");


// add food item
const addFood= async(req,res)=>{
    let image_filename= `${req.filename}`;

    const food= new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }

}

module.exports={addFood}