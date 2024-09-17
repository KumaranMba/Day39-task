const express = require('express');
const app = express();
const cors = require('cors');
const mentorRouter = require('./controllers/MentorRouter');  // ensure correct file path and case
const studentRouter = require('./controllers/StudentRouter');

app.use(cors());
app.use(express.json());

app.use('/Mentors', mentorRouter); // lowercase route
app.use('/Students',studentRouter);


/*

Mentor Api's

GET          /Mentors 

POST         /Mentors 

GET by ID    /Mentors/get-mentor/:ID 


Student Api's

GET           /Students 

POST          /Students 

To get list of students whose mentors weren't assigned

GET          /Students/no-mentors

To assign or change Mentor for student

PATCH        /Students/assign-mentor/:student-id

To assign mentors for multiple Students

PATCH        /Students/assign-mentor-students

To Assign or Change Mentor for particular student

Pass Mentor ID in request Body

PATCH        /Students/assign-mentor/:student-id 

To Assign mentor for multiple students

Pass Mentor ID and Student ID as list in body

PATCH        /Students/assign-mentor-students 

To get all students of particular Mentor

GET          /Students/mentor-students/:mentor-id 


*/

// Add a catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
