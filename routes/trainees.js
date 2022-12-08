const express = require('express');
const router = express.Router();

const trainee = require('../models/Trainee');

router.post('/', (request, response) => {
    let newTrainee = new trainee(request.body);
    newTrainee.save().then(result => {
        response.send({status: "New trainee added"})
    });
});

router.put('/:id', (request, response) => {
    const  traineeId = request.params.id;
    trainee.updateOne(
        {_id: traineeId},
        {$set: {...request.body}})
    .then(result => {
        if(result.modifiedCount === 1){
            response.send({status: 'Trainee updated'})
        }
    })
})


module.exports = router;