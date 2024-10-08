const express = require('express');
const router = express.Router();
const Person=require('./../models/person');
// post route to add a person 
router.post('/', async (req, res) => {
    try {
        const data = req.body  // assumign the request body contains the persom data

        // create new person documment  using the mangoose model
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.get('/', async (req, res) => {
    // wxtract the work from url
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });

        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})
router.get('/:workType', async (req, res) => {
    // wxtract the work from url
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });

        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})
router.put('/:id',async(req,res)=>{
    try{
    const personId=req.params.id;
    const updatePersonData=req.body;
    const response=await  Person.findByIdAndDelete(personId,updatePersonData,{
       new:true,
       runValidators:true,
    })
    if(!response){
        return res.status(404).json({error: 'prson not found'});
    }
    console.log('data updated');
    res.status(500).json({error:'Internal server Error'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'prson not found'});
        }
        console.log('data delete');
        res.status(200).json({message:'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports=router;