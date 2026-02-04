import { getAllTasks } from "../models/tasks.model.js";

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
