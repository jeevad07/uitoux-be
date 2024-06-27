require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const index=require('./Route/index');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Database Details
const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;
const DB_URL = process.env.DB_URL;
const DB_NAME = "uitouxDB";
const uri = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB using Mongoose
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', index);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

