const express = require ("express");
const router = express.Router();
const readTodos = require ("../controllers/todos");
const createTodos = require ("../controllers/todos");

router.get('/', readTodos);
router.get('/', createTodos);

exports default router;