const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); //Requiring models folder to set up sequelize
const routes = require('./routes'); //Requiring routes folder that can hold api and html routes
const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static('client/build'));

//using the routes folder.  The is a index file the will direct routes traffic in the folder
app.use(routes);

//{ force: false } to not overwrite DB each app load
//{ force: true } to overwrite DB each app load
db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}`);
	});
});