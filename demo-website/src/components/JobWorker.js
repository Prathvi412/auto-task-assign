import React from 'react';

const JobWorker = ({ worker, onTaskStatusChange }) => {
  return (
    <div style={workerStyle}>
      <h3>{worker.name}</h3>
      <ul>
        {worker.tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onTaskStatusChange(worker.id, task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const workerStyle = {
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

export default JobWorker;
