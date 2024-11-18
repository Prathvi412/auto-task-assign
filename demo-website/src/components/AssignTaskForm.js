import React, { useState } from 'react';

const AssignTaskForm = ({ workers, onAssignTask }) => {
  const [selectedWorker, setSelectedWorker] = useState(workers[0]?.id || '');
  const [taskTitle, setTaskTitle] = useState('');

  const handleAssignTask = () => {
    if (taskTitle.trim() === '') return;
    onAssignTask(selectedWorker, taskTitle);
    setTaskTitle('');
  };

  return (
    <div style={formStyle}>
      <h3>Assign New Task</h3>
      <select
        value={selectedWorker}
        onChange={(e) => setSelectedWorker(Number(e.target.value))}
      >
        {workers.map((worker) => (
          <option key={worker.id} value={worker.id}>
            {worker.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAssignTask}>Assign Task</button>
    </div>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: '20px 0',
};

export default AssignTaskForm;
