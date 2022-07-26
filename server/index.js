const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

// Connect to DB
connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/characters', require('./routes/character'));

// Main path
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(4000, () => {
  console.log('server running');
});
