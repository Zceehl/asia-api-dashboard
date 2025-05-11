// backend/src/server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const performanceRoutes = require('./routes/performance');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_performance',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Make pool available to routes
app.locals.db = pool;

// Routes
app.use('/api/performance', performanceRoutes);

// Basic route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});