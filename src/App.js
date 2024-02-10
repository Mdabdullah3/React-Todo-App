import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import FilterTask from './Components/FilterTask';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  // Save tasks to local storage 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [selectedPriority, setSelectedPriority] = useState('all');

  const addTask = newTask => {
    setTasks([...tasks, { id: Date.now(), ...newTask, completed: false }]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, updatedTask, updatedPriority) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, task: updatedTask, priority: updatedPriority } : task
    ));
  };

  return (
    <div className='w-11/12 mx-auto font-mono'>
      <Navbar />
      <Banner />
      <AddTask onAdd={addTask} />
      <FilterTask selectedPriority={selectedPriority} setSelectedPriority={setSelectedPriority} />
      <TaskList
        allTask={tasks}
        selectedPriority={selectedPriority}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;
