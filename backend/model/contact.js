const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({

    Firstname:{
        type: String,
        required: true
    },
    Lastname:{
        type: String,
        required: true
    },
    Mobile:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("phonebooks", contactSchema);