const express = require('express');
const router = express.Router();

const enrollment = require('../models/Enrollment');

router.get('/:id', ( request, response ) => {
    enrollment.findOne({ _id: request.params.id })
    .populate('training', 'trainee')
    .then( result => {
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});

router.get('/:id/trainee', ( request, response ) => {
    enrollment.findOne(
        { _id: request.params.id },
    )
    .populate('trainee')
    .then( result => {
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});

router.get('/:id/training', ( request, response ) => {
    enrollment.findOne(
        { _id: request.params.id },
    )
    .populate('training')
    .then( result => {
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});

router.post('/', ( request, response ) => {
    let newEnrollment = new enrollment( request.body );
    newEnrollment.save().then( result => {
        response.send({ status: "New enrollment posted" });
    });
});



module.exports = router;