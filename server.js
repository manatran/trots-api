import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';
import apiRoutes from './server/api/api.routes';

require('dotenv').config();

// Settings
const port = process.env.PORT || 5000;
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://manaus_t:FWMnADCY@ds121889.mlab.com:21889/gdm-gent';

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUrl);

// Initialize the server
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
  res.send('GDM GENT API')
});
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${port}! Build something amazing!`);
  }
});
