const mongoose = require('mongoose');

const TraineeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    email: String,
    contactNumber: String,
    address: String
});

module.exports = mongoose.model('trainees', TraineeSchema);