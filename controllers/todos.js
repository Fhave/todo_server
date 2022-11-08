const mongoose = require ("mongoose");
const Todo = require('./../models/todos');

const readTodos = async(req,res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({err: err.message})
  }
}

const createTodos = async(req,res) => {
  const todos = new Todo(req.body);
  try {
    await Todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(409).json({err: err.message})
  }
}

module.exports = { readTodos, createTodos };