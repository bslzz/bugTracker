const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.json('Hello');
});

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
