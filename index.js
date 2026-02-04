import "dotenv/config"; //para el env
import express from "express";
import tasksRouter from "./src/routes/tasks.routes.js";

//creo nueva iunstancia de express
const app = express();
//para que lea json en el body
app.use(express.json());

//defino una ruta para el endpoint raiz
//callback captura la request (petición) y entrega una response (respuesta).
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
console.log(process.env.PORT);
//defino el puerto
const PORT = process.env.PORT || 3001;
//Pongo a escuchar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
