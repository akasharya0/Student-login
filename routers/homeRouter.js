const express = require('express');
const Router  = express.Router();
const homeSchema = require('../models/homeSchema');

Router.get('/',(err,res)=>{
    res.render('register')   
})
Router.post('/register',async(req,res)=>{
    try{
        const {
            name,
            department,
            email,
            mobile,
            address,
        } = req.body;
 
        
         const userData = new homeSchema({
            name,
            department,
            email,
            mobile,
            address,
          })
          userData.save((err)=>{
              if(err){
                console.log("err");
              }else{
                 res.render('register')
              }
           })
    
   
    
    }catch(error){
 
     res.render('register')
    }

     })
        

 module.exports= Router;