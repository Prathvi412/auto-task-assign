import React, { useState } from 'react';
import jobWorkers from '../data/jobWorkers';

let currentWorkerIndex = 0; // To keep track of which worker to assign the task to

const UserPanel = () => {
  const [currentUser] = useState(jobWorkers[0]); // For demo, assume the first user is logged in
  const [newRequest, setNewRequest] = useState('');

  // Function to assign a new request to a job worker
  const handleUserRequest = () => {
    if (newRequest.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: newRequest,
      completed: false,
    };

    // Get the current job worker based on the round-robin index
    const assignedWorker = jobWorkers[currentWorkerIndex];
    assignedWorker.tasks.push(newTask);

    // Move to the next job worker (circular rotation)
    currentWorkerIndex = (currentWorkerIndex + 1) % jobWorkers.length;

    // Reset the input field
    setNewRequest('');
    alert(`Task "${newTask.title}" has been assigned to ${assignedWorker.name}.`);
  };

  return (
    <div style={userPanelStyle}>
      <h1>User Panel</h1>
      <h2>Welcome, {currentUser.name}!</h2>

      <h3>Your Requests:</h3>
      <input
        type="text"
        placeholder="Enter your request here"
        value={newRequest}
        onChange={(e) => setNewRequest(e.target.value)}
      />
      <button onClick={handleUserRequest}>Submit Request</button>
    </div>
  );
};

const userPanelStyle = {
  padding: '20px',
};

export default UserPanel;
