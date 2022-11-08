const express = require ("express");
const router = express.Router();
const { readTodos, createTodo } = require ("../controllers/todos.js");

router.get('/', readTodos);
router.post('/', createTodo);

module.exports = router;