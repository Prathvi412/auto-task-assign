import React, { useState } from 'react';
import jobWorkers from '../data/jobWorkers';
import JobWorker from './JobWorker';

let currentWorkerIndex = 0; // Round-robin counter for task assignment

const AdminPanel = () => {
  const [workers, setWorkers] = useState(jobWorkers);

  // Function to handle task status change and reassign tasks in round-robin format
  const handleTaskStatusChange = (workerId, taskId) => {
    const updatedWorkers = workers.map((worker) => {
      // Find the specific task and toggle its status
      if (worker.id === workerId) {
        const updatedTasks = worker.tasks.map((task) => {
          if (task.id === taskId) {
            const updatedTask = { ...task, completed: !task.completed };

            // If the task is not completed, reassign it in round-robin format
            if (!updatedTask.completed) {
              // Get the next worker based on round-robin counter
              const assignedWorker = workers[currentWorkerIndex];
              assignedWorker.tasks.push(updatedTask);

              // Remove the task from the current worker
              const filteredTasks = worker.tasks.filter((t) => t.id !== taskId);
              worker.tasks = filteredTasks;

              // Update the round-robin index
              currentWorkerIndex = (currentWorkerIndex + 1) % workers.length;

              alert(`Task "${updatedTask.title}" has been reassigned to ${assignedWorker.name}.`);
            }

            return updatedTask;
          }
          return task;
        });
        return { ...worker, tasks: updatedTasks };
      }
      return worker;
    });

    setWorkers(updatedWorkers);
  };

  return (
    <div style={panelStyle}>
      <h1>Admin Panel</h1>
      <h2>Job Workers and Their Tasks</h2>
      {workers.map((worker) => (
        <JobWorker
          key={worker.id}
          worker={worker}
          onTaskStatusChange={handleTaskStatusChange}
        />
      ))}
    </div>
  );
};

const panelStyle = {
  padding: '20px',
};

export default AdminPanel;
