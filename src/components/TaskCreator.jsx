import React, { useState } from 'react';

function TaskCreator() {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('task', newTaskName);
    setNewTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      ></input>

      <button>Add Task</button>
    </form>
  );
}

export default TaskCreator;
