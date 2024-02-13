const express = require("express");
const roter = express.Router();

roter.post('/fooddata',(req,res)=>{
    try {
        res.send([global.fooditems,global.foodcategory]);
    } catch (error) {
        console.log("error in fetching data");
    }
})


module.exports=roter;