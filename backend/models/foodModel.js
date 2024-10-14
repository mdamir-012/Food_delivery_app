const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})


const foodModel = mongoose.models.fooddata|| mongoose.model("fooddata",foodSchema);

module.exports={foodModel}