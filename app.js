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
app.use('/api/employee', require('./routes/employeeRoute'));
app.use('/api/client', require('./routes/clientRoute'));
app.use('/api/login', require('./routes/loginRoute'));

//PORT
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
