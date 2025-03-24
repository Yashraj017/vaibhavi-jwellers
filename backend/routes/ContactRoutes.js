const express = require('express');
const Contact = require('./models/Contact');

const router = express.Router();

// Handle contact form submission
router.post('/create', async (req, res) => {
    let {name,email,
        phone,
        inquiry,
        message} = req.body
    const newContact = new Contact({
        name,
        email,
        phone,
        inquiry,
        message

    });

    console.log(newContact)

   
    res.send('Message received! We’ll get back to you soon.');
});

module.exports = router;

