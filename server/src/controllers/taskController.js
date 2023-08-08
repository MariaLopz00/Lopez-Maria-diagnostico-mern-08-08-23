const Task = require('../models/task');

// Controlador para crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear la tarea.' });
  }
};

// Controlador para obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas.' });
  }
};

// Controlador para marcar una tarea como completada
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: 'Tarea no encontrada.' });
  }
};

// Controlador para eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarea eliminada exitosamente.' });
  } catch (error) {
    res.status(404).json({ error: 'Tarea no encontrada.' });
  }
};
