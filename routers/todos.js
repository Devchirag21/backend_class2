// main file like folder
const express = require("express");
const router = express.Router();

//import controller

const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define api routes
// controller se mapping karna
// yaha ham pass kar rha ha ki ya sab schema ha jo aapna backend ma use hoga
router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo);
router.put("/updateTodo/:id",updateTodo);
router.get("/getTodo/:id", getTodoById);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;