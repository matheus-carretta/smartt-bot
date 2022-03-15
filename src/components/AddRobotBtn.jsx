import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import AddRobot from '../images/AddRobot.svg';

function AddRobotBtn() {
  const { robotQuantity, changeModalVisibility } = useContext(ModalContext);

  return (
    <button
      className="add-robot-btn"
      type="button"
      onClick={() => changeModalVisibility(true)}
      disabled={robotQuantity <= 0}
    >
      <img src={AddRobot} alt="Add a new robot button" />
    </button>
  );
}

export default AddRobotBtn;
