const express = require('express');
const app = express();
const PORT = 3000;

app.get('/pizza', (req, res) => {
	res.send('Here is the GET /pizza response');
});

app.post('/pizza', (req, res) => {
	res.send('Here is the POST /pizza response');
});

app.listen(PORT, () => {
	console.log(`On port ${PORT}`);
});
