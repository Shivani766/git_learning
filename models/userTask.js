const mongoose = require('mongoose');

// Define the schema
const UserTaskSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  taskName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now // Updated default to Date.now()
  }
});

// Create the model
const UserTask = mongoose.model('UserTask', UserTaskSchema);

module.exports = UserTask;
