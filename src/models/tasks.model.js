/*
Esquema sugerida para el modelo de una Task
 Task{
 id: string,
 title: string,
 description: string,
 completed: boolean
 createdAt: Date,
 }
 */

let tasks = [
  /* {
    id: "1",
    title: "tarea",
    description: "sdsadasd",
    completed: true,
    createdAt: new Date(),
  },*/
];

export const getAllTasks = () => {
  return tasks;
};
