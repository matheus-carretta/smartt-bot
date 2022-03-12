import React from 'react';
import Header from './components/Header';
import Transaction from './components/Transactions';
import AddRobotSection from './components/AddRobotSection';
import RobotContainer from './components/RobotContainer';
import './styles/App.css';

function App() {
  return (
    <div className="content-container">
      <main>
        <Header />
        <Transaction />
        <AddRobotSection />
        <RobotContainer />
      </main>
    </div>
  );
}

export default App;
