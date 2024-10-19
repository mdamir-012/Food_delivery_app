const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt");
const validator=require("validator");
const { userModel } = require("../models/usermodel");
const dotenv= dotenv.config()


//login
const loginUser=async (req,res)=>{

}


const createToken=(id)=>{
    return jwt.sign({id},salt)
}

// register
const registerUser= async(req,res)=>{
    const {name,password,email}=req.body;

   
    try{
        const exists= await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exists"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please Enter valid email"})
        }
    }
    catch(err){
        console.log(err)
    }

    if(password.length<8){
        return res.json({success:false,message:"Please enter a strong password"})
    }

    // hashing user password
    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);

    const newUser= new userModel({
        name:name,
        email:email,
        password:hashedPassword
    })

   const user=  await newUser.save()
   


   

}

module.exports={loginUser,registerUser}