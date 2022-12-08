const express = require('express');
const router = express.Router();

const admin = require('../models/Admin');

router.get ('/:id', (request, response) => {
    admin
    .find(
        {_id: request.params.id},
        {password: 0})
    .then((result) => {
        console.log(result);
        if (typeof result === 'object'){
            response.send(result)
        }
    });
});

router.get('/:id/training', ( request, response ) => {
    admin
    .find(
        { _id: request.params.id },
        { 
            title: 1
        })
    .populate('training', 'title')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});

router.put('/:id', (request, response) => {
    const adminId = request.params.id;
    admin.updateOne(
        {_id: adminId},
        {$set: {...request.body}})
    .then(result => {
        if(result.modifiedCount === 1){
            response.send({status: 'Admin has been updated'});
        }
    });
});

router.put('/:adminId/training/:trainingId', (request, response) => {
    admin.updateOne(
        { title: request.params.title }, 
        { $push: { training: request.params.trainingId }},
    ).then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Training has been added by Admin" });
        }
    });
});

//Delete admin
router.delete('/:id', (request, response) => {
    admin.deleteOne({_id: request.params.id})
    .then(result => {
        if(result.deletedCount === 1){
            response.send({
                status: 'Admin has been deleted'
            })
        }
    });
});

module.exports = router;
