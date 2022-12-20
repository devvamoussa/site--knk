const mongoose = require('mongoose')

const ApiSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    metier: {

        type: String,
        required: [true, 'please add a text value'],
    },
    ville: {

        type: String,
        required: [false, 'please add a text value'],
    },
    commune: {

        type: String,
        required: [false, 'please add a text value'],
    },
    constitue: {

        type: String,
        required: [false, 'please add a text value'],
    },
    geograpique: {

        type: String,
        required: [false, 'please add a text value'],
    },
}, 
    {
        timestamps: true,
    }

)

module.exports = mongoose.model('Api', ApiSchema)