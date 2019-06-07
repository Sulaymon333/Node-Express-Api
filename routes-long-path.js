const express = require('express');
const studentRoutes = express.Router();
const {
    showHome,
    showAbout,
    showContact,
    showStudents,
    showStudent,
    allStudents,
    singleStudent,
    addStudent,
    deleteStudent,
    editStudent
} = require('./controllers/student.controllers');

// studentRoutes.get('/', showHome);
// studentRoutes.get('/about', showAbout);
// studentRoutes.get('/contacts', showContact);
// studentRoutes.get('/teachers', (req, res) => {
//     res.json(teachers);
// });
studentRoutes.get('/students', showStudents);
studentRoutes.get('/students/:id', showStudent);
studentRoutes.get('/students', allStudents);
studentRoutes.post('/students', addStudent);
studentRoutes.get('/:search', singleStudent);
studentRoutes.delete('/:id', deleteStudent);
studentRoutes.put('/:id', editStudent);

module.exports = studentRoutes;

// studentRoutes.get('/api/v1/students/:search', singleStudent);
