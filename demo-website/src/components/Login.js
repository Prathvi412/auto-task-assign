import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };

  return (
    <div style={loginStyle}>
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const loginStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
};

export default Login;
