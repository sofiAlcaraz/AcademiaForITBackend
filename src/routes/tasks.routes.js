import express from "express";
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  getTasksController,
  updateTaskController,
} from "../controllers/tasks.controller.js";
const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasksController);
tasksRouter.get("/:id", getTasksController);
tasksRouter.post("/", createTaskController);
tasksRouter.delete("/:id", deleteTaskController);
tasksRouter.put("/:id", updateTaskController);

export default tasksRouter;
