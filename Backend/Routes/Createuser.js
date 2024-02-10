const express=require('express');
const roter=express.Router();
const user=require('../models/User');

roter.post('/createuser',async (req,res)=>{
    try {
       await user.create({
            name:"Rk",
            password:"123",
            email:"rk@gmail.com",
            location:"bantwal"
        });
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});

    }
});
module.exports=roter;