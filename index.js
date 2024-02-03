const express = require('express');
const mongoose = require('mongoose');
const app = express();

const studentrouter= require("./routes/students");
app.use('/students',studentrouter)

const url = "mongodb://localhost:"; 
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;3000

app.use(express.json());

try {
    con.on('open', () => {
        console.log('Connected to the database');
    })
} catch (error) {
    console.log("Error: " + error);
}

const port = 3000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});