const express = require('express')
const bodyParser = require('body-parser')
require('./server/Model');
const controller = require('./server/Controller');

// Create the server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', controller);

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})


const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
  //res.status(404);
})