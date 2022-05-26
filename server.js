const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')
db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to MongoDB",{ useNewUrlParser: true });
});
db.on("error", err => {
    console.log(err);
});

app.use(express.json())

app.use('/leaner', require('./router/leaner.js'));
app.use('/couch', require('./router/couch.js'));
app.use('/session', require('./router/session.js'));
app.use('/experience', require('./router/experience.js'));



app.listen(9000);