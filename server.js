const express = require('express');
const mongoose = require('mongoose');
const app = express();  

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(express.json()); // Use express.json() for parsing JSON

// Routes
app.get('/', (req, res) => {
  res.send("My to-do collection will show here");
});

const userTaskRouters = require('./routers/userTaskRouters');
app.use('/task', userTaskRouters);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
