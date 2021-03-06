import React from 'react';
import Header from './components/Header';
import Transactions from './components/Transactions';
import AddRobotSection from './components/AddRobotSection';
import RobotContainer from './components/RobotContainer';
import MovimentsProvider from './context/MovimentsProvider';
import RobotsProvider from './context/RobotsProvider';
import ModalProvider from './context/ModalProvider';
import './styles/App.css';

function App() {
  return (
    <div className="content-container">
      <main>
        <RobotsProvider>
          <Header />
          <MovimentsProvider>
            <Transactions />
          </MovimentsProvider>
          <ModalProvider>
            <AddRobotSection />
          </ModalProvider>
          <RobotContainer />
        </RobotsProvider>
      </main>
    </div>
  );
}

export default App;
