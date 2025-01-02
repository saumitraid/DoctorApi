const express=require('express');
const router=express.Router();
const Model=require('../models/patModel');
const jwt=require('jsonwebtoken');

router.post('/newreg', async (req,res)=>{
    const {name,mobile,age,email,address,gender,password}=req.body;
    try {
        const existsPat=await Model.findOne({email});
        if(existsPat){
            return res.status(400).json({messaged:'Email already exists'})
        }
        const newPateint=new Model({name, mobile, age, email, address, gender, password});
        await newPateint.save();
        // const token=jwt.sign({
        //     id:newPateint._id,
        //     name:newPateint.name,
        //     role:newPateint.role
        // }, process.env.SECRET_KEY,{
        //     expiresIn:process.env.JWT_EXPIRATION
        // });
        res.json({message:'Registration successfull'});
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});


// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await Model.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check password match
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { username: user.name, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRATION }
      );
      const role=user.role;
  
      res.json({ message: 'Login successful', token, role });
    } catch (err) {
        // console.log(err.message);
        res.status(400).json({ message: err.message });
    }
  });

module.exports=router;