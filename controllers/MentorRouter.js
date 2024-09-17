const express = require("express");
const mentorRouter = express.Router();
const Mentor = require('../models/MentorModel');

// Endpoint to get all mentors
mentorRouter.get('/', (request, response) => {
    Mentor.find({})
        .then(mentors => {
            response.status(200).json(mentors);
        })
        .catch(error => {
            response.status(500).json({ message: 'Error fetching mentors', error });
        });
});

/* Create Mentor */
mentorRouter.post('/', (request, response) => {
    const mentor = new Mentor(request.body);

    mentor.save()
        .then(() => {
            response.status(201).json({ message: 'Mentor created successfully' });
        })
        .catch(error => {
            response.status(400).json({ message: 'Error creating mentor', error });
        });
});

/* get mentor based on ID*/

mentorRouter.get('/:id',(request,response)=>{
    const id = request.params.id;

    Mentor.findById(id)
       .then(mentor=>{
              response.status(200).json(mentor);
       })
       .catch(err=>{
          response.status(404).json({message:'Mentor id does not exists'});
       })
})

module.exports = mentorRouter;
