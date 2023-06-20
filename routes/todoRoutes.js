const { Router } = require("express");
const {
  getToDoList,
  saveTodoTask,
  updateTodoTask,
  deleteTheTask,
} = require("../controllers/todoListController");

const router = Router();

router.get("/", getToDoList);
router.post("/saveTask", saveTodoTask);
router.post("/updateTask", updateTodoTask);
router.post("/deleteTask", deleteTheTask);

module.exports = router;
