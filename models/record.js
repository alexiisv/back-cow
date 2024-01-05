const { Schema, model } = require('mongoose');

const RecordSchema = Schema({
    aid_Vaca: {
        type: string,
        required: [true, 'identifier is required'],
        unique: false,
    },
    c02_scd: {
        type: Number,
        required: [true, 'identifier is required'],
        unique: false,
    },
    // temp_scd: {
    //     type: Number,
    //     required: [true, 'identifier is required'],
    //     unique: false,
    // },
    // hum_scd: {
    //     type: Number,
    //     required: [true, 'identifier is required'],
    //     unique: false,
    // },
    // heart_valid: {
    //     type: Number,
    //     required: [true, 'identifier is required'],
    //     unique: false,
    // },
});

module.exports = model( 'Record', RecordSchema );