import "dotenv/config"; //para el env
import express from "express";
import tasksRouter from "./src/routes/tasks.routes.js";

//creo nueva instancia de express
const app = express();
//middleware para que express pueda entender JSON
app.use(express.json());
//rutas
app.use("/api/tasks", tasksRouter);

//Manejo de Errores
app.use((err, res) => {
  switch (err.status) {
    case 404:
      res.status(404).send("Recurso no encontrado o ruta inválida");
      break;

    default:
      res.status(500).send("Error Interno del Servidor");
  }
});
//defino el puerto
const PORT = process.env.PORT || 3001;
//Pongo a escuchar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
