const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [false, 'please add a name']
    },
    lasName: {
    type: String,
    required: [false, 'please add a lasname']
    },

    email: {
        type: String,
        required: [false, 'please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [false, 'please add a password']
    },
    password2: {
        type: String,
        required: [false, 'please add a password']
    },
    number: {
        type: String,
        required: [false, 'please add a number']
    },
     newdate: {
        type: String,
        required: [false, 'please add a number']
    },
    genre: {
        type: String,
        required: [false, 'please add a number']
    },
    //verified: {
        //type: Boolean,
        //default: false,
    //},
},


{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)