const express=require('express');
const router=express.Router();
const Model=require('../models/docModel');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

router.post('/post', authenticate, authorize('admin'), async(req,res)=>{
    const data=new Model({
        name:req.body.name,
        mobile:req.body.mobile,
        degree:req.body.degree,
        special:req.body.special,
        about:req.body.about,
        yoe:req.body.yoe
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.get('/getAll', authenticate, authorize('admin'), async(req,res)=>{
    try{
        const data=await Model.find();
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/getOne/:id', authenticate, async(req,res)=>{
    try{
        const data=await Model.findById(req.params.id)
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

router.delete('/delOne/:id', authenticate, authorize('admin'), async(req,res)=>{
    try{
        const data=await Model.findByIdAndDelete(req.params.id)
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

// Route to update a specific entry by ID
router.put('/updateOne/:id', authenticate, authorize('admin'), async (req, res) => {
    const { name, mobile, degree, special, about, yoe } = req.body;
    try {
        const updatedData = await Model.findByIdAndUpdate(
            req.params.id,
            { name, mobile, degree, special, about, yoe },
            { new: true, runValidators: true }
        );
        if (!updatedData) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports=router;