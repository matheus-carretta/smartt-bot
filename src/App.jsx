import React from 'react';
import Header from './components/Header';
import Transaction from './components/Transactions';
import AddRobotSection from './components/AddRobotSection';
import RobotContainer from './components/RobotContainer';

function App() {
  return (
    <main>
      <Header />
      <Transaction />
      <AddRobotSection />
      <RobotContainer />
    </main>
  );
}

export default App;
