const mongoose = require ("mongoose");
const Todo = require('./../models/todos.js');

const readTodos = async(req,res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(404).json({err: err.message})
  }
}

const createTodos = async(req,res) => {
  const todo = new Todo(req.body);
  try {
    await Todo.create(todo);
    res.status(200).json(todo);
  } catch (err) {
    res.status(409).json({err: err.message})
  }
}

module.exports = { readTodos, createTodos };