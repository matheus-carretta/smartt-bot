import React, { useState } from 'react';
import AddRobot from '../images/AddRobot.svg';
import '../styles/AddRobotSection.css';
import Modal from './Modal';

function AddRobotSection() {
  const [robotQuantity, setRobotQuantity] = useState(2);
  const [isModalVisible, setIsModalVisibile] = useState(false);

  return (
    <section className="add-robot-section">
      <div className="add-button-container">
        <button
          className="add-robot-btn"
          type="button"
          onClick={() => setIsModalVisibile(true)}
          disabled={robotQuantity <= 0}
        >
          <img src={AddRobot} alt="Add a new robot button" />
        </button>
        <div className="add-robot-infos-container">
          <h2 className="add-robot-title">Adicionar novo Robô</h2>
          <p className="disponible-robots">
            Você possui
            <span className={robotQuantity <= 0 ? 'zero-robots' : 'one-or-more-robots'}>
              {` ${robotQuantity} robôs `}
            </span>
            disponíveis
          </p>
        </div>
      </div>
      { isModalVisible && (
      <Modal
        onClose={
        () => setIsModalVisibile(false)
      }
        setRobotQuantity={() => setRobotQuantity()}
      />
      )}
    </section>
  );
}

export default AddRobotSection;
