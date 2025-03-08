import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (editingIndex !== null) {
      // Edit existing task
      const newTasks = [...tasks];
      newTasks[editingIndex] = task;
      setTasks(newTasks);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index); // Set the index of the task being edited
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <TaskForm
          onSubmit={addTask}
          initialTask={editingIndex !== null ? tasks[editingIndex] : null} // Pass the task being edited
        />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleCompleted={toggleCompleted}
          onEdit={editTask} // Pass the editTask function
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;