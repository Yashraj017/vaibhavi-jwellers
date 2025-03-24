const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vaibhavi-jewellers", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define the schema for contact form entries
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    inquiry: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Handle form submissions
app.post('/submit-form', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// Home route
app.get('/', (req, res) => {
    res.send('Vaibhavi Jewellers Backend is running!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
