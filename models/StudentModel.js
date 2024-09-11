const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:string,
        required: true
    },
    batch:{
        type:string,
        required: true
    },
    mentor:{
        type: mongoose.Schema.Types.ObjectId,
        default: undefined,
        ref:'Mentor'
    }
})

module.exports = mongoose.model('Student',studentSchema,'Students') 