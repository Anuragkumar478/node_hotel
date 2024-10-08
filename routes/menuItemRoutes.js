const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
router.post('/', async (req, res) => {
    try {
      const data = req.body  // assumign the request body contains the persom data
  
      // create new person documment  using the mangoose model
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
  
  
    }
  
  
    catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
  
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  router.get('/:taste', async (req, res) => {
    try {
      // const data = await MenuItem.find();
      // console.log('data fetched');
      // res.status(200).json(data);
  
    }
    catch (err) {
      // console.log(err);
      // res.status(500).json({ error: 'Internal server error' });
    }
  })
  module.exports=router;