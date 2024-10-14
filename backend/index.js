const express=require("express");
const cors=require("cors");
const {connection} = require("./config/db.js");
const { foodRouter } = require("./routes/foodRoute.js");


// app config
const app=express();
const port = 8000;

//middleware
app.use(express.json());
app.use(cors());


// dB connection

app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")

})


app.listen(port,async()=>{
    try{
        await connection
        console.log(`listening on port ${port}`);
    }
    catch(err){
        console.log(err)
    }
    
})