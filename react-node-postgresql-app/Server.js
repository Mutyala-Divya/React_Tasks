const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'your_db_user',
  host: 'your_db_host',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

// Create 50 dummy records
app.get('/api/create-dummy-data', async (req, res) => {
  try {
    const client = await pool.connect();
    for (let i = 1; i <= 50; i++) {
      const query = `
        INSERT INTO customers (sno, customer_name, age, phone, location, created_at)
        VALUES ($1, $2, $3, $4, $5, $6);
      `;
      const values = [i, `Customer ${i}`, 20 + (i % 30), `123456789${i % 10}`, `Location ${i}`, new Date()];
      await client.query(query, values);
    }
    client.release();
    res.send('Dummy data created');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating dummy data');
  }
});

// Fetch data with pagination, search, and sorting
app.get('/api/customers', async (req, res) => {
  const { page = 1, search = '', sortBy = '', sortOrder = 'asc' } = req.query;
  const limit = 20;
  const offset = (page - 1) * limit;
  let query = `
    SELECT sno, customer_name, age, phone, location, created_at
    FROM customers
    WHERE customer_name ILIKE $1 OR location ILIKE $1
  `;
  if (sortBy) {
    query += ` ORDER BY ${sortBy} ${sortOrder}`;
  }
  query += ` LIMIT $2 OFFSET $3`;
  try {
    const client = await pool.connect();
    const result = await client.query(query, [`%${search}%`, limit, offset]);
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
