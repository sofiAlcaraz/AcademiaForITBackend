import express from "express";
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  updateTaskController,
} from "../controllers/tasks.controller.js";
const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasksController);
tasksRouter.post("/", createTaskController);
tasksRouter.delete("/:id", deleteTaskController);
tasksRouter.put("/:id", updateTaskController);

export default tasksRouter;
