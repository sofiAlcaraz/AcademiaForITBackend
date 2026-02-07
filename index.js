import "dotenv/config"; //para el env
import express from "express";
import tasksRouter from "./src/routes/tasks.routes.js";
import cors from "cors";

//creo nueva instancia de express
const app = express();
//middleware para que express pueda entender JSON
app.use(express.json());
//para evitar problemas de CORS
app.use(cors());
//rutas
app.use("/api/tasks", tasksRouter);

//Manejo de Errores
app.use((req, res) => {
  res.status(404).send("Recurso no encontrado o ruta inválida");
});
app.use((err, req, res) => {
  res.status(500).send("Error Interno del Servidor");
});
//defino el puerto
const PORT = process.env.PORT || 3001;
//Pongo a escuchar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
