const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/k-meal-planner',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true, // Enable SSL
    tlsInsecure: false,// Ensure TLS is secure
  }
);

module.exports = mongoose.connection;
