import React from 'react';
import Header from './components/Header';
import Transactions from './components/Transactions';
import AddRobotSection from './components/AddRobotSection';
import RobotContainer from './components/RobotContainer';
import './styles/App.css';
import MovimentsProvider from './context/MovimentsProvider';

function App() {
  return (
    <div className="content-container">
      <main>
        <MovimentsProvider>
          <Header />
          <Transactions />
          <AddRobotSection />
          <RobotContainer />
        </MovimentsProvider>
      </main>
    </div>
  );
}

export default App;
