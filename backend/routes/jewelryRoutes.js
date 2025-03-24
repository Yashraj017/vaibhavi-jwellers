const express = require('express');
const Jewelry = require('../models/Jewelry');

const router = express.Router();

// Get all jewelry items
router.get('/', async (req, res) => {
    const jewelry = await Jewelry.find();
    res.json(jewelry);
});

// Add a new jewelry item
router.post('/', async (req, res) => {
    const newItem = new Jewelry(req.body);
    await newItem.save();
    res.json(newItem);
});

module.exports = router;
