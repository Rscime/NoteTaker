//requierments, app, PORT, ect

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//pull in API and HTML routes
const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/html');
app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT, () => console.log(`Listening on PORT, at http://localhost:${PORT} 🚀`))