const mongoose = require('mongoose');
const { Schema } = mongoose;

const kgidSchema = new Schema({
    phoneno: {
        type: Number,
        unique: true,
        required: true
    },
    KGID: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: false
    },
    dob: {
        type: Date,
        required: true
    },
    doj: {
        type: Date,
        required: true
    },
    designation: {
        type: String,
       
        required: true
    },
    address: {
        type: String,
        required: false
    },
    address1: {
        type: String,
        required: false
    },
    pincode: {
        type: Number,
        required: false
    },
    candidatedistrict: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    physicalchallenge: {
        type: Boolean,
        required: false
    },
    disability: {
        type: String,
        enum: ['Visual', 'Hearing', 'Mobility', 'Other'],
        required: false
    },
    percentagedisability: {
        type: Number,
        required: false
    },
    document: {
        type: String,
        required: false
    },
  
    // Grade: {
    //     type: String,
    //     required: false
    // }
});

module.exports = mongoose.model('kgidcandidate', kgidSchema);
