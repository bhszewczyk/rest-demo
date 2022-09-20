const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const { v4: getUuid } = require('uuid');

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
	{ id: getUuid(), username: 'Ponyo', comment: 'Peew peew' },
	{ id: getUuid(), username: 'Ida', comment: 'Grrr, woof woof. AWOOOOOOOO!' },
	{ id: getUuid(), username: 'Eevee', comment: 'Mmmmmba' },
	{
		id: getUuid(),
		username: 'Volo',
		comment: 'Woof woof, wo wo wo woooooooof!',
	},
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
	comments.push({ username, comment, id: getUuid() });
	// redirect right to where the comments are
	res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	const comment = comments.find((comment) => comment.id === id);

	if (!comment) {
		res.render('comments/notfound', { id });
	}
	res.render('comments/show', { comment });
});

app.listen(PORT, () => {
	console.log(`On port ${PORT}`);
});
