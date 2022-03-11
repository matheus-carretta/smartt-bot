import React from 'react';
import { fetchRobots } from './services/api';
import Header from './components/Header';
import Transaction from './components/Transactions';

function App() {
  fetchRobots();
  return (
    <main>
      <Header />
      <Transaction />
    </main>
  );
}

export default App;
