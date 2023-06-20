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

module.exports.updateTodoTask = async (req, res) => {
  const { _id } = req.body;
  const { task } = req.body;
  const { desc } = req.body;
  const { dateAndTime } = req.body;
  todoListModel
    .findByIdAndUpdate(_id, { task, desc, dateAndTime })
    .then(() => res.send("Updated the task data."))
    .catch((err) => console.log(err));
};
module.exports.deleteTheTask = async (req, res) => {
  const { _id } = req.body;
  todoListModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted the task successfully."))
    .catch((err) => console.log(err));
};
