const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

const app = express();
dotenv.config();

// db connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database Connection Successful"))
    .catch(err => console.log(err))