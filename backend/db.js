require('dotenv').config();
const mysql = require('mysql2');

// Set default values if environment variables are not found
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'ponsomu756@',
  database: process.env.DB_NAME || 'dj_kach_db'
};

console.log('Database config:', {
  host: dbConfig.host,
  user: dbConfig.user,
  database: dbConfig.database,
  password: dbConfig.password ? '***' : 'undefined'
});

const db = mysql.createConnection(dbConfig);

module.exports = db;