/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const homeRoute = require('./controllers/home');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.set(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', homeRoute);

app.listen(PORT, () => console.warn('server up and running on port ', PORT));
