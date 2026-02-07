import {
  createTask,
  deleteTask,
  getAllTasks,
  getTasks,
  updateTask,
} from "../models/tasks.model.js";

const validate = (status, title, res) => {
  switch (true) {
    case status == undefined || status === "" || status.trim().length === 0:
      res.status(400).json({ message: "El estado es obligatorio" });
      return;
    case title == undefined || title === "" || title.trim().length === 0:
      res.status(400).json({ message: "El titulo es obligatorio" });
      return;
  }
};

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

export const getTasksController = (req, res) => {
  try {
    const { id } = req.params;
    const task = getTasks(id);

    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.status(200).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener tarea", error: error.message });
  }
};
export const createTaskController = (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (status === undefined) {
      res.status(400).json({ message: "El estado es obligatorio" });
      return;
    }

    validate(title, status, res);

    const newTask = createTask(title, description, status);

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

export const updateTaskController = (req, res) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;
    validate(status, title, res);
    const updatedTask = updateTask(id, title, description, status);
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res
      .status(200)
      .json({ message: "Tarea actualizada exitosamente", updatedTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar la tarea", error: error.message });
  }
};
