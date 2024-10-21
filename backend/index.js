require('dotenv').config();
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Task = require('./models/Task');
const User = require('./models/User')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true // Allow credentials
}));
// .
app.use(bodyParser.json());
app.use(cookieParser());
// Connect to MongoDB
mongoose.connect(process.env.url)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

// GET /tasks: Fetch all tasks
app.get('/tasks',async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /tasks/:id: Fetch a single task by ID
app.get('/tasks/:id',async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /tasks: Add a new task
app.post('/tasks',async (req, res) => {
  const task = new Task({
    content: req.body.content,
  });
  try {
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /tasks/:id: Update a task by ID
app.put('/tasks/:id' ,async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /tasks/:id: Delete a task by ID
app.delete('/tasks/:id'  ,async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




//register the user
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt =  bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await new User({ username, email, password: hash });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("user not found");
    }
    const ComparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!ComparePassword) {
      return res.status(401).json("password entered is incorrect!");
    }
    const token = jwt.sign({ id: user._id,username:user.username,email:user.email }, process.env.secret, {
      expiresIn: "3d",
    });
    const info = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    res.cookie("jwttoken", token).status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ...

app.get("/logout", async (req, res) => {
  try {
    res.clearCookie("jwttoken",{sameSite:"none",secure:true}).status(200).send("User logged out successfully!")
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});



//keeping the user loggedIn
app.get("/refetch", (req, res) => {
  const token = req.cookies.jwttoken
  jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
    if (err) {
      
      return res.status(404).json(err)
      console.log(err)
    }
    res.status(200).json(data)
  })
})



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
