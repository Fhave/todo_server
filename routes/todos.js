const express = require ("express");
const router = express.Router();
const { readTodos, createTodos } = require ("../controllers/todos.js");

router.get('/', readTodos);
router.post('/', createTodos);

module.exports = router;