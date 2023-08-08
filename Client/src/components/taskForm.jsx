import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { createTask } from '../api/api';

function TaskForm({ onTaskAdded }) {
  const [newTask, setNewTask] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleAddTask = async () => {
    if (titulo.trim() === '' || descripcion.trim() === '') return;

    try {
      const taskData = {
        text: newTask,
        completed: false,
        titulo: titulo,
        descripcion: descripcion,
      };
      const createdTask = await createTask(taskData);
      onTaskAdded(createdTask);
      setNewTask('');
      setTitulo('');
      setDescripcion('');
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <div className='container-form'>
      <h1>Agrega una Tarea 😛</h1>
      <input
      className='formu'
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
      className='formu'
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <Button variant="info" onClick={handleAddTask} >Agregar</Button>
    </div>
  );
}

export default TaskForm;
