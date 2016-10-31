/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
const dotEnv             = require('dotenv').config({silent: true});
const session            = require('express-session');
const cookieParser       = require('cookie-parser');
const express            = require('express');
const logger             = require('morgan');
const path               = require('path');
const methodOverride     = require('method-override');
const bodyParser         = require('body-parser');

const homeRoute          = require('./routes/index');
const searchRoute        = require('./routes/search');
const favRoute           = require('./routes/fav');
const gmapRoute          = require('./routes/gmap');
const authRoute          = require('./routes/auth');
const userRoute          = require('./routes/user');

const app                = express();
const PORT               = process.argv[2] || process.env.PORT || 3000;

const SECRET             = 'tacos3000';

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(logger('dev')); // log requests to console

// Set static file root folder
app.use(express.static(path.join(__dirname, 'public')));
// app.set(express.static('public'));

// parse applicatin/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));
// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.use('/', homeRoute);
app.use('/search', searchRoute);
app.use('/favorites', favRoute);
app.use('/map', gmapRoute);
app.use('/auth', authRoute);
app.use('/users', userRoute);
// app.use('/send', sendRoute);

app.listen(PORT, () => console.warn('server up and running on port ', PORT));
