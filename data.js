// data.js
let tasks = [];
let idCounter = 1;

function getTasks() {
  return tasks;
}

function getTask(id) {
  return tasks.find(task => task.id === id);
}

function createTask(title) {
  const task = { id: String(idCounter++), title, completed: false };
  tasks.push(task);
  return task;
}

function updateTask(id, newData) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  if (newData.title !== undefined) task.title = newData.title;
  if (newData.completed !== undefined) task.completed = newData.completed;
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  const [removed] = tasks.splice(index, 1);
  return removed;
}

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
