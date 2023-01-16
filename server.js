// Importing express, express-handlebars, express-session
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

// Initializing sequelize with session store/ SequelizeStore is a SQL session store using Sequelize.js
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// is Node.js global function that allows to extract contents from module.exports object inside some file
const path = require('path');

// To use routes, sequelize and middleware under utils folder
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Syncing with sequelize
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});