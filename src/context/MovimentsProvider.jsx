import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import MovimentsContext from './MovimentsContext';
import { fetchRobotsOverview } from '../services/api';

function MovimentsProvider({ children }) {
  const [moviment, setMoviment] = useState({});

  const getRobotsOverview = async () => {
    const data = await fetchRobotsOverview();
    setMoviment(data);
  };

  useEffect(() => {
    getRobotsOverview();
  }, []);

  const value = useMemo(() => ({ moviment }), [moviment]);

  return (
    <MovimentsContext.Provider value={value}>
      {children }
    </MovimentsContext.Provider>
  );
}

MovimentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MovimentsProvider;
