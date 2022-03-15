import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';

function ModalProvider({ children }) {
  const [robotQuantity, setRoboQuantity] = useState(2);
  const [isModalVisible, setIsModalVisibile] = useState(false);

  const changeModalVisibility = (boolean) => {
    setIsModalVisibile(boolean);
  };

  const changeRobotQuantity = () => {
    setRoboQuantity(robotQuantity - 1);
  };

  const value = useMemo(() => ({
    robotQuantity,
    isModalVisible,
    changeModalVisibility,
    changeRobotQuantity,
  }), [robotQuantity,
    isModalVisible,
    changeModalVisibility, changeRobotQuantity]);

  return (
    <ModalContext.Provider value={value}>
      {children }
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ModalProvider;
