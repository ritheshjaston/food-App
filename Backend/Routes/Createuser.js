const express=require('express');
const roter=express.Router();
const user=require('../models/User');

roter.post('/createuser',async (req,res)=>{
    try {
       await user.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location
        });
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});

    }
});
module.exports=roter;