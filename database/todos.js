const todo = require("../views/index.ejs");

function index(req, res) {
  res.render("/views/index.ejs", { todo: "Example To Do", done: false });
}

function newTodo(req, res) {
  res.render("database/todos.js");
}

function create(req, res) {
  const todo = { todo: req.body.todo };
  todo.create(todo);
  res.redirect("/todos");
}

module.exports = {
  index,
  new: newTodo,
  create,
};
