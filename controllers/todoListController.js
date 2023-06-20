const todoListModel = require("../models/todoListModel");

module.exports.getToDoList = async (req, res) => {
  const todoList = await todoListModel.find();
  res.send(todoList);
};

module.exports.saveTodoTask = async (req, res) => {
  const { task } = req.body;
  const { desc } = req.body;
  const { dateAndTime } = req.body;

  todoListModel.create({ task, desc, dateAndTime }).then((data) => {
    console.log("Saved the data");
    console.log(data);
    res.send(data);
  });
};
