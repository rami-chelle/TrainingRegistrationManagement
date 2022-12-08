const express = require('express');
const router = express.Router();

// Model
const admin = require('../models/Admin');

// BCrypt
const bcrypt = require('bcrypt');

router.post('/register', async ( request, response ) => {
    const hashedPassword = await bcrypt.hash( 'null', 10 );
    const newAdmin = new admin({
        ...request.body,
        password: hashedPassword
    });

    newAdmin.save().then( result => {
        response.send({ status: "Admin has been created" });
    })

});

router.post('/login', async (request, response) => {
    const email = request.body.email
    const password = request.body.password

    await admin.findOne({email}).then(result => {
    if(!result) return response.status(400)
    bcrypt.compare(password, result.password, (err, match) => {
        if (err) throw err
        if(match){
            response.send({
                status: 'Valid credentials',
                id: result._id
            });
        } else {
            response.send({
                status: 'Invalid Credentials'
            })
        }
    });
    });
});



module.exports = router;