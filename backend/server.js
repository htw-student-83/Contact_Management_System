require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const contactRoutes = require('./routes/contactrouts')
const port = process.env.PORT;
const address_mongoDB = process.env.MONGO_URL;

app.use(express.json())

app.use('/api/contact', contactRoutes)

mongoose.connect(address_mongoDB)
    .then(() =>{
        console.log("Connected with the mongoDB");
        app.listen(port, () =>{
            console.log("The server is running on port " + port)
        })
    })
    .catch((error) => {
        console.log(error);
    })


