const express = require('express');
const router = express.Router();
const UserTask = require('../models/userTask'); // Ensure the correct path and casing

// GET all tasks

router.get('/', async (req, res) => {
  try {
    const data = await UserTask.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new task
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newTask = new UserTask(data);
    const response = await newTask.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// UPDATE a task by ID
router.put('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedData = req.body;
    const updatedTask = await UserTask.findByIdAndUpdate(taskId, updatedData, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    console.log("Data updated");
    res.status(200).json(updatedTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE a task by ID
router.delete('/:id', async (req, res) => {
  try  {
    const taskId = req.params.id;
    const deletedTask = await UserTask.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    console.log("Data deleted");

    res.status(200).json

    (deletedTask);

  } catch (err) {
    console.log(err);
    
    res.status(500).json({ error: 'Internal Server Error' });
  }

  
});

// this is a comment
module.exports = router;


