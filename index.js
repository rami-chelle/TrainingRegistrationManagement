const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const port = 8111;

//Middlewares
require('dotenv').config()
server.use(morgan ('dev') );
server.use(cors());
server.use(bodyParser.json());
server.use( helmet() );

//Routes
const AuthRoute = require('./routes/auth');
const AdminRoute = require('./routes/admins');
const EnrollmentRoute = require('./routes/enrollments');
const TraineeRoute = require('./routes/trainees');
const TrainingRoute = require('./routes/trainings');


//Database connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

server.get('/', (request, response) => {
    response.send(`Welcome to Training Registration Management by DICT`);
});

server.use('/api/v1/auth', AuthRoute);
server.use('/api/v1/admin', AdminRoute);
server.use('/api/v1/enrollment', EnrollmentRoute);
server.use('/api/v1/trainee', TraineeRoute),
server.use('/api/v1/training', TrainingRoute);

server.listen(
    port, 
    () => {
        console.log(`Server is running on port ${port}`);
    }
)

