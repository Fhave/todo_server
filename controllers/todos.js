const mongoose = require ("mongoose");
const Todo = require("../models/todos.js");

const readTodos = async(req,res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(404).json({err: err.message})
  }
}

const createTodo = async(req,res) => {
  const todo = new Todo(req.body);
  try {
    await Todo.create(todo);
    res.status(200).json(todo);
  } catch (err) {
    res.status(409).json({err: err.message})
  }
}

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`The id ${id} is not valid`);
  }
  const todo = { title, content, _id: id };
  await Todo.findByIdAndUpdate(id, todo, { new: true })
  res.json(todo);
}

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`The id ${id} is not valid`);
  }
  await Todo.findByIdAndRemove(id)
  res.json({ message: 'Todo deleted successfully' });
}

module.exports = { readTodos, createTodo, updateTodo, deleteTodo };