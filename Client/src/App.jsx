import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import { fetchTasks, updateTaskCompletion, deleteTask } from './api/api';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error al obtener las tareas:', error));
  }, []);

  const handleToggleCompletion = async (taskId, completed) => {
    try {
      await updateTaskCompletion(taskId, completed);
      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? { ...task, completed } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const handleTaskAdded = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList
        tasks={tasks}
        onToggleCompletion={handleToggleCompletion}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
