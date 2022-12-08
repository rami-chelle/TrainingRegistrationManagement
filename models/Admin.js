const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    contactNumber: String,
    training : [
        {type: mongoose.Schema.Types.ObjectId, ref: 'trainings'}
    ]
});

module.exports = mongoose.model('admins', AdminSchema);