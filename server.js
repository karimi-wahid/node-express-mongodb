const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = require('./app');

mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => console.log('DB connected!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('Unhandler Rejection Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
