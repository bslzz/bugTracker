const express = require('express');
require('dotenv').config();

//initiate
const app = express();

//db
require('./db/db');

app.get('/', (req, res) => {
  res.json('Hello');
});

//PORT
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
