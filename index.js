const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// parse requests included in the body of the request
app.use(express.urlencoded({ extended: true }));
// parse json format payload
app.use(express.json());
// define absokute path to the views
app.set('views', path.join(__dirname, 'views'));
// set up engine as EJS
app.set('view engine', 'ejs');

const comments = [
	{ username: 'Ponyo', comment: 'Peew peew' },
	{ username: 'Ida', comment: 'Grrr, woof woof. AWOOOOOOOO!' },
	{ username: 'Eevee', comment: 'Mmmmmba' },
	{ username: 'Volo', comment: 'Woof woof, wo wo wo woooooooof!' },
];

// GET /comments - list all comments
app.get('/comments', (req, res) => {
	res.render('comments/index', { comments });
});

// GET /comments/new - create a new comment
app.get('/comments/new', (req, res) => {
	res.render('comments/new');
});

app.listen(PORT, () => {
	console.log(`On port ${PORT}`);
});
