const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelizeConnection = require('./config/sequelizeConnection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const models= require('./models');

const sess = {
    secret: 'aja',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelizeConnection
    })
};

app.use(session(sess));
const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`Working on port ${PORT}!`);
    sequelizeConnection.sync({force: true}).then(() => require('./seeds'))
});