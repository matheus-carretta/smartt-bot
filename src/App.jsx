import React from 'react';
import fetchRobots from './services/api';

function App() {
  fetchRobots();
  return (
    <h1>Olá!</h1>
  );
}

export default App;
