const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json()); // IMPORTANT

// Connect to MongoDB container
mongoose.connect('mongodb://mongo:27017/testdb')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Create Schema
const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number
});

// Create Model
const Student = mongoose.model('Student', studentSchema);

// Simple route
app.get('/', (req, res) => {
  res.send("Multi-container App Working 🚀");
});

// Add student API
app.post('/add-student', async (req, res) => {
  try {

    const { name, rollNo } = req.body;
 console.log("Body received:", req.body);
    const newStudent = new Student({ name, rollNo });
    await newStudent.save();

    res.status(201).json({
      message: 'Student added successfully',
      data: newStudent
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});