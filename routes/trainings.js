const express = require('express');
const Training = require('../models/Training');
const router = express.Router();

const training = require('../models/Training');

router.get('/:id', (request, response) => {
    training.findOne({_id: request.params.id})
    .populate('author', 'title') /* if author only, it returns admin info and trainings authored */
    .then(result => {
        if(typeof result === 'object'){
            response.send(result)
        }
    });
});

router.post ('/:id', (request, response) => {
    let newTraining = new Training({
        ...request.body,
        author: request.params.id
    });
    newTraining.save().then( result => {
        response.send({ status: "New training created" });
    });
});

router.put('/:id', ( request, response ) => {
    const trainingId = request.params.id;
    Training.updateOne(
        { _id: trainingId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Training has been updated" });
        }
    });
});

router.delete('/:id', (request, response) => {
    training.deleteOne({_id: request.params.id})
    .then(result => {
        if(result.deletedCount === 1){
            response.send({
                status: 'Training has been deleted'
            })
        }
    })
});

module.exports = router;