import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { fetchRobots } from '../services/api';
import RobotsContext from './RobotsContext';
import Loading from '../components/Loading';

function RobotsProvider({ children }) {
  const [robots, setRobots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRobots = async () => {
    const { data } = await fetchRobots();
    setRobots(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getRobots();
  }, [robots]);

  const value = useMemo(() => ({
    robots,
    isLoading,
  }), [robots, isLoading]);

  return (
    <RobotsContext.Provider value={value}>
      {isLoading ? <Loading /> : children }
    </RobotsContext.Provider>
  );
}

RobotsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RobotsProvider;
