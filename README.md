# AcademiaForITBackend

Este proyecto es una API RESTful desarrollada en Node.js con Express que implementa un CRUD de tareas.

Las tareas se almacenan temporalmente en un array en memoria (sin base de datos), con manejo básico de errores.

---

## Endpoints

- GET /api/tasks — Obtener todas las tareas

- POST /api/tasks — Crear una nueva tarea

- PUT /api/tasks/:id — Actualizar una tarea existente

- DELETE /api/tasks/:id — Eliminar una tarea

---

## Estructura de una Task

<pre>

{
id: string,
title: string,
description: string,
status: "pending" | "in_progress" | "completed",
createdAt: Date
}
</pre>

---

## Configuración del proyecto

- Proyecto configurado con "type": "module" (ES Modules)
- Licencia MIT
- Uso de variables de entorno con dotenv (process.env)
- ESLint
- Husky

---

## Instalaciones extra

- nodemon: reinicia el servidor automáticamente ante cambios en el código durante el desarrollo
- eslint: detecta errores de sintaxis y problemas de estilo
- dotenv: permite utilizar variables de entorno con process.env
- husky: automatiza la ejecución de ESLint antes de cada commit

---

## Scripts para correr el proyecto

1. npm run start
2. npm run dev

- start: ejecuta el proyecto con Node

- dev: ejecuta el proyecto con Nodemon

---

## Archivos adicionales

- .gitignore

- .env

- .env.example

- eslint.config.js

- .husky/
