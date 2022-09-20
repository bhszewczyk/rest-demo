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

app.get('/', (req, res) => {
	res.render('home');
});

const comments = [
	{ id: 1, username: 'Ponyo', comment: 'Peew peew' },
	{ id: 2, username: 'Ida', comment: 'Grrr, woof woof. AWOOOOOOOO!' },
	{ id: 3, username: 'Eevee', comment: 'Mmmmmba' },
	{ id: 4, username: 'Volo', comment: 'Woof woof, wo wo wo woooooooof!' },
];

// GET /comments - list all comments
app.get('/comments', (req, res) => {
	res.render('comments/index', { comments });
});

// GET /comments/new - create a new comment
app.get('/comments/new', (req, res) => {
	res.render('comments/new');
});

// POST /comments - display all coments with a new one
app.post('/comments', (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment });
	// redirect right to where the comments are
	res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	const comment = comments.find((comment) => comment.id === parseInt(id));
	res.render('comments/show', { comment });
});

app.listen(PORT, () => {
	console.log(`On port ${PORT}`);
});
