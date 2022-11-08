const express = require ("express");
const router = express.Router();
const { readTodos, createTodos } = require ("../controllers/todos");

router.get('/', readTodos);
router.get('/', createTodos);

module.exports = router;