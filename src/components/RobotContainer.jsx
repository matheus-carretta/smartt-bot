import React, { useEffect, useState } from 'react';
import { fetchRobots } from '../services/api';
import RobotCard from './RobotCard';
import '../styles/RobotContainer.css';

function RobotContainer() {
  const [robots, setRobots] = useState([]);

  const getRobots = async () => {
    const { data } = await fetchRobots();
    setRobots(data);
  };

  useEffect(() => {
    getRobots();
  }, []);

  return (
    <section className="robot-cards-container">
      {robots.length > 0 ? robots.map((robot) => <RobotCard key={robot.id} robot={robot} />) : '' }
    </section>
  );
}

export default RobotContainer;
