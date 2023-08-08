// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchTasks = async () => {
  try {
    const response = await API.get('/tasks');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las tareas');
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await API.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    throw new Error('Error al agregar la tarea');
  }
};

export const updateTaskCompletion = async (taskId, completed) => {
  try {
    const response = await API.put(`/tasks/${taskId}`, { completed });
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar la tarea');
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await API.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar la tarea');
  }
};
