import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

function AddRobotText() {
  const { robotQuantity } = useContext(ModalContext);
  return (
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
  );
}

export default AddRobotText;
