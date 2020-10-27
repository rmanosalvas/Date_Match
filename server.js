const path = require('path');
const express = require('express');
const db = require('./models'); //Requiring models folder to set up sequelize
const routes = require('./routes'); //Requiring routes folder that can hold api and html routes
const app = express();
const passport = require("./config/passport"); // Requiring passport
const session = require("express-session"); // Requiring session for passport
const PORT = process.env.PORT || 3002;

// passport config
app.use(session({
	secret: "partylater",
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// Configure body parser for AJAX requests
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build/public'));
}
// Html Routes
app.get('/', (req, res) => {
	console.log("kjsfgahisdbfgasdfajsdfasdfasdf")
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/dashboard', function (req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/matches', function (req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/community', function (req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/profile', function (req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/password', function (req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//Api Routes  The is a index file the will direct routes traffic in the folder
app.use(routes);

//{ force: false } to not overwrite DB each app load
//{ force: true } to overwrite DB each app load
db.sequelize.sync({
	force: false
}).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}`);
	});
});