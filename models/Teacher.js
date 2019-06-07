const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    age: {
        type: Number
    },
    bio: {
        type: String
    },
    courses: {
        type: Array
    },
    createAt: {
        type: Date
    }
});

module.exports = Teacher = mongoose.model('teacher', teacherSchema); // to create teacher schema/ database to mongodb

