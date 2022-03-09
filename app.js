// external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal imports
const { notFoundHandler, errorHandler } = require('./middlewares/commons/errorHandler');
const loginRouter = require('./router/loginRouter');

const app = express();
dotenv.config();

// DB connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database Connection Successful"))
    .catch(err => console.log(err))

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ser View Engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter);
// app.use('/users', usersRouter);
// app.user('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`App listening on http://${process.env.HOSTNAME}:${process.env.PORT}`);
});

