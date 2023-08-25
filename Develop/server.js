//requierments, app, PORT, ect

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//pull in API and HTML routes
const htmlRoute = require('./routes/html.js');
app.use(htmlRoute);

// const apiRoute = require('./routes/api.js');
// app.use(apiRoute);


app.listen(PORT, () => console.log(`Listening on PORT , at http://localhost:${PORT} 🚀`))