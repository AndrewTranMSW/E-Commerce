//Default express and routes
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//Default middleware for parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//route initializing
app.use(routes);

//syncs Sequelize models to the db and turns on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});