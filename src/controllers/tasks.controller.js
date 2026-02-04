import { createTask, getAllTasks } from "../models/tasks.model.js";

export const getAllTasksController = (req, res) => {
  try {
    //simulo que llamo al modelo
    const tasks = getAllTasks();
    // Lógica para obtener todas las tareas
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las tareas", error: error.message });
  }
};
export const createTaskController = (req, res) => {
  // Lógica para crear una nueva tarea

  try {
    const { title, description, status } = req.body;

    if (status === undefined) {
      res.status(400).json({ message: "El estado es obligatorio" });
      return;
    }
    const newTask = createTask({ title, description, status });

    res.status(201).json({ message: "Tarea creada exitosamente", newTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear la tarea", error: error.message });
  }
};
