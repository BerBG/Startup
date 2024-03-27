const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    areas: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: String, // Opcional: se desejar armazenar o URL da foto do tutor
    socialMedia: String,
    hourlyRate: Number,
    availability: String,
    teachingMethod: String,
    testimonials: String
});

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
