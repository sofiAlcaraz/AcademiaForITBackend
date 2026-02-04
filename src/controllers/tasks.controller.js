import { createTask, deleteTask, getAllTasks } from "../models/tasks.model.js";

export const getAllTasksController = (req, res) => {
  try {
    const tasks = getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las tareas", error: error.message });
  }
};
export const createTaskController = (req, res) => {
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

export const deleteTaskController = (req, res) => {
  const { id } = req.params;
  const deletedtaskstatus = deleteTask(id);
  if (!deletedtaskstatus) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
  res.status(200).json({ message: "Tarea eliminada exitosamente" });
};
