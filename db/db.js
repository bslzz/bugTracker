const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', () => console.log('Connected to db'));
db.on('error', (err) => console.log('Error connecting to db' + err));
db.on('disconnected', () => console.log(' DB disconnected'));

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});
