const express = require('express');
require('dotenv').config();

//initiate
const app = express();

//db
require('./db/db');

//body, middleware
app.use(express.json());

//routes
app.use('/api/admin', require('./routes/adminRoute'));

//PORT
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
