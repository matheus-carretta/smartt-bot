import React from 'react';
import { fetchRobots } from './services/api';
import Header from './components/Header';
import Transaction from './components/Transactions';
import AddRobotSection from './components/AddRobotSection';

function App() {
  fetchRobots();
  return (
    <main>
      <Header />
      <Transaction />
      <AddRobotSection />
    </main>
  );
}

export default App;
