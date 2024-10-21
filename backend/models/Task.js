const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
