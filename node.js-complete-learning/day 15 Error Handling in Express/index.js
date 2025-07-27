const express = require('express');
const app = express();

// Sample route
app.get('/sync', (req, res) => {
  throw new Error('Sync Error!');
});

// Async route
app.get('/async', async (req, res, next) => {
  try {
    const result = await Promise.reject(new Error('Async Error!'));
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error caught:', err.message);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
