const express = require('express');
require('dotenv').config();
const path = require('path');

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

//Deploy
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

//PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
