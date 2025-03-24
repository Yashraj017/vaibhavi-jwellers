const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    inquiry: String,
    message: String,
});

// Use the check to avoid OverwriteModelError
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = Contact;
