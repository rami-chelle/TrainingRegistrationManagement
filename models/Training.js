const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema({
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'admins'
    },
    title: String,
    description: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    status: String,
    trainingschedule: Date
});

module.exports = mongoose.model('trainings', TrainingSchema);