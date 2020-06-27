const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect to the database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define Routes
// API Routes
app.use('/api/nutrition', require('./routes/api/nutrition'));
app.use('/api/training', require('./routes/api/training'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
