const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the admin directory
app.use('/admin', express.static(path.join(__dirname, 'public/admin')));

// Serve the admin index.html for /admin route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Admin interface available at http://localhost:${PORT}/admin`);
});
