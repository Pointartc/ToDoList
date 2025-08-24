// const express = require('express');
// const path = require('path');
//
// const app = express();
//
// // Serve only the static files form the dist directory
// app.use(express.static('./dist/ToDoList'));
//
// app.get('/*', (req, res) =>
// res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
// );
const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/to-do')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/to-do/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
