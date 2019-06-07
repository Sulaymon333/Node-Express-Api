const express = require('express');
const studentRoutes = express.Router();
const person = {
    name: 'Asab'
};

studentRoutes.get('/', (req, res) => {
    res.render('pages/index', { person });
});
studentRoutes.get('/about', (req, res) => {
    res.render('pages/about');
});
studentRoutes.get('/contacts', (req, res) => {
    res.render('pages/contact');
});
studentRoutes.get('/teachers', (req, res) => {
    res.json(teachers);
});
studentRoutes.get('/students', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            res.status = 400;
            res.send('Not found');
        }
        res.render('pages/students', { students });
    });
});
studentRoutes.get('/students/:id', (req, res) => {
    const id = req.params.id;
    Student.findOne({ _id: id }, (err, student) => {
        if (err) {
            res.status = 400;
            res.send('Not found');
        }
        res.render('pages/student', { student });
    });
});
studentRoutes.get('/api/v1/students', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            res.status = 404;
            return;
        }
        res.json(students);
    });
});
studentRoutes.get('/api/v1/students/:search', (req, res) => {
    const id = req.params.search;
    Student.findOne({ _id: id }, (err, student) => {
        if (err) {
            res.status = 404;
            return;
        }
        res.json(student);
    });
});
studentRoutes.delete('/api/v1/students/:id', (req, res) => {
    const id = req.params.id;
    Student.deleteOne({ _id: id }, (err, student) => {
        if (err) {
            res.status = 400;
            res.send('Not found');
        }
        res.send('A student has been deleted');
    });
});
studentRoutes.post('/api/v1/students', (req, res) => {
    const newStudent = new Student(req.body);
    newStudent.save(err => {
        if (err) {
            console.log(err);
            return;
        }
        res('A student has been added');
    });
});

studentRoutes.put('/api/v1/students/:id', (req, res) => {
    const id = req.params.id;
    const { name, country, age, bio } = req.body;
    Student.findOne({ _id: id }, (err, student) => {
        student.name = name;
        student.country = country;
        student.age = age;
        student.bio = bio;
        student.save(err => {
            if (err) {
                res.status = 404;
                console.log(err);
            }
            res.send('A student has been updated');
        });
    });
});
module.exports = studentRoutes;
