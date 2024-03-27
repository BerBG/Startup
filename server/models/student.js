const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
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
    photo: String // Opcional: se desejar armazenar o URL da foto do estudante
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
