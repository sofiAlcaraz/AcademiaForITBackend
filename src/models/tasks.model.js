/*
Esquema sugerida para el modelo de una Task
 Task{
 id: string,
 title: string,
 description: string,
 status:"pending" || "inProgress"|| "completed",
 createdAt: Date,
 }
 */

let tasks = [
  /* {
    id: "1",
    title: "tarea",
    description: "sdsadasd",
    status: "completed",
    createdAt: new Date(),
  },*/
];

export const getAllTasks = () => {
  return tasks;
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
