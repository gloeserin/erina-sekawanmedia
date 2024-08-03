const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [
  { email: 'admin@example.com', password: 'password123', role: 'Admin' },
  { email: 'guest@example.com', password: 'password123', role: 'Guest' },
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
