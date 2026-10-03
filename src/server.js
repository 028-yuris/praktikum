const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/v1', (_req, res) => {
  res.status(200).json({
    status: true,
    message: 'Welcome to API v1',
    data: null,
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});