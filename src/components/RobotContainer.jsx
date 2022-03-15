import React, { useContext } from 'react';
import RobotCard from './RobotCard';
import '../styles/RobotContainer.css';
import RobotsContext from '../context/RobotsContext';

function RobotContainer() {
  const { robots } = useContext(RobotsContext);
  return (
    <section className="robot-cards-container" data-testid="robot-cards-container">
      {robots.length > 0
        ? robots.map((robot) => <RobotCard key={robot.id} robot={robot} />)
        : '' }
    </section>
  );
}

export default RobotContainer;
