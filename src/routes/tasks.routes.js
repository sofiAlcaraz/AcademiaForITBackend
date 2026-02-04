import express from "express";
import { getAllTasksController } from "../controllers/tasks.controller.js";
const tasksRouter = express.Router();

//obtener todas las tareas
tasksRouter.get("/", getAllTasksController);
/*
router.post("/", createTaskController);
router.put("/:id", updateTaskController);
router.delete("/:id", deleteTaskController);
*/

export default tasksRouter;
