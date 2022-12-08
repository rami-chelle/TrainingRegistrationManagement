const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
    training:[ 
        {
            type: mongoose.Types.ObjectId,
            ref: 'trainings'
        }
    ],
    trainee: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'trainees'
        }
    ],
    body: String,
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('enrollments', EnrollmentSchema);