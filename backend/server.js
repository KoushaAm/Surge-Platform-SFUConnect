const express = require('express');
const app = express();
const bodyParser = require('body-parser');




// send hello world
app.get('/hello', (req, res) => {
  res.send('This is a message from the server!');
});

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));

