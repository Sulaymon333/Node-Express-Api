require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentRoutes = require('./routes');
const displayDayTime = require('./shared/display-day-time');

// custom middleware
app.use((req, res, next) => {
    const time = displayDayTime();
    console.log(req.url);
    console.log(`The user is checking ${req.url} at ${time}`);
    next(); // is used to end the request-response cycle
});
mongoose.connect(process.env.MONGODB_URI, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Server is connected to mongodb data base Atlas');
});

// setting the view engine
app.set('view engine', 'ejs');

// serving static file
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // extended: false, so that the form data does not get in the url

// parse application/json
app.use(bodyParser.json());

app.use(studentRoutes); // app.use('/api/v1', studentRoutes); for short path in the route.js

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
});
