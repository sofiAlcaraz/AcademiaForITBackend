import express from "express";
import {
  createTaskController,
  getAllTasksController,
} from "../controllers/tasks.controller.js";
const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasksController);
tasksRouter.post("/", createTaskController);
/*
tasksRouter.put("/:id", updateTaskController);
tasksRouter.delete("/:id", deleteTaskController);
*/

export default tasksRouter;
