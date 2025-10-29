const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "static" virtual path
app.use('/static', express.static(path.join(__dirname)));

// Serve index on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`DevOps Demo App listening at http://localhost:${PORT}`);
});
