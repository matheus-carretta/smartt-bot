import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import '../styles/AddRobotSection.css';
import Modal from './Modal';
import AddRobotBtn from './AddRobotBtn';
import AddRobotText from './AddRobotText';

function AddRobotSection() {
  const { isModalVisible, changeModalVisibility } = useContext(ModalContext);
  return (
    <section className="add-robot-section">
      <div className="add-button-container">
        <AddRobotBtn />
        <AddRobotText />
      </div>
      { isModalVisible && (<Modal onClose={() => changeModalVisibility(false)} />)}
    </section>
  );
}

export default AddRobotSection;
