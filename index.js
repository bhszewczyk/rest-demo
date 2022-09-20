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

app.get('/comments', (req, res) => {
	res.render('comments/index', { comments });
});

app.get('/pizza', (req, res) => {
	res.send('Here is the GET /pizza response');
});

app.post('/pizza', (req, res) => {
	const { meal, qty } = req.body;
	res.send(
		`Here is the POST /pizza response. You have ordered ${qty} ${meal}(s)`
	);
});

app.listen(PORT, () => {
	console.log(`On port ${PORT}`);
});
