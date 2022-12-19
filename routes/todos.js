const express = require ("express");
const { readTodos, createTodo, updateTodo, deleteTodo } = require ("../controllers/todos.js");


const router = express.Router();

router.get('/', readTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;