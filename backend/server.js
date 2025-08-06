const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-name.netlify.app', 'http://localhost:5173']
    : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Routes

// GET - Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'DJ Kach API is running' });
});

// POST - Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;
  const query = 'INSERT INTO contacts (name, email, phone, company, subject, message) VALUES (?, ?, ?, ?, ?, ?)';
  
  db.query(query, [name, email, phone, company, subject, message], (err, result) => {
    if (err) {
      console.error('Error submitting contact form:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: result.insertId, message: 'Contact form submitted successfully' });
  });
});

// GET - Get all contacts
app.get('/api/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching contacts:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// POST - Create new booking
app.post('/api/bookings', (req, res) => {
  const { name, email, phone, event_type, event_date, event_time, venue, message } = req.body;
  const query = 'INSERT INTO bookings (name, email, phone, event_type, event_date, event_time, venue, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [name, email, phone, event_type, event_date, event_time, venue, message], (err, result) => {
    if (err) {
      console.error('Error creating booking:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: result.insertId, message: 'Booking created successfully' });
  });
});

// GET - Get all bookings
app.get('/api/bookings', (req, res) => {
  const query = 'SELECT * FROM bookings ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.originalUrl });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 