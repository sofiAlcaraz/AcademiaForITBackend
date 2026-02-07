/* {
    id: "1",
    title: "tarea",
    description: "sdsadasd",
    status: "completed",
    createdAt: new Date(),
  },*/

let tasks = [];

export const getAllTasks = () => {
  return tasks;
};
export const getTasks = (id) => {
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return false;
  }
  return task;
};

export const createTask = (newTitle, newDescription, newStatus) => {
  const newId = (tasks.length + 1).toString();
  const newTask = {
    id: newId,
    title: newTitle,
    description: newDescription,
    status: newStatus,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  return newTask;
};

export const deleteTask = (id) => {
  const tasktoremove = tasks.findIndex((task) => task.id === id);
  if (tasktoremove === -1) {
    return false;
  }
  tasks.splice(tasktoremove, 1); //modifica el array original
  return true;
};

export const updateTask = (id, newTitle, newDescription, newStatus) => {
  const taskToUpdate = tasks.find((task) => task.id === id);

  if (!taskToUpdate) {
    return false;
  }
  taskToUpdate.title = newTitle;
  taskToUpdate.description = newDescription;
  taskToUpdate.status = newStatus;
  taskToUpdate.createdAt = new Date();

  return taskToUpdate;
};
