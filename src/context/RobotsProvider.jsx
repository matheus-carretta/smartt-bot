import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { fetchRobots } from '../services/api';
import RobotsContext from './RobotsContext';

function MovimentsProvider({ children }) {
  const [robots, setRobots] = useState([]);

  const getRobots = async () => {
    const { data } = await fetchRobots();
    console.log(data);
    setRobots(data);
  };

  useEffect(() => {
    getRobots();
  }, []);

  const value = useMemo(() => (robots), [robots]);

  return (
    <RobotsContext.Provider value={value}>
      {children }
    </RobotsContext.Provider>
  );
}

MovimentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MovimentsProvider;
