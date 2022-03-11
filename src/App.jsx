import React from 'react';
import fetchRobots from './services/api';
import Header from './components/Header';

function App() {
  fetchRobots();
  return (
    <Header />
  );
}

export default App;
