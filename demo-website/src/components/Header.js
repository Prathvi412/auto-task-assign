import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Demo Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: '20px',
  backgroundColor: '#282c34',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default Header;
