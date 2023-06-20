const { Router } = require("express");
const {
  getToDoList,
  saveTodoTask,
} = require("../controllers/todoListController");

const router = Router();

router.get("/", getToDoList);
router.post("/saveTask", saveTodoTask);

module.exports = router;
