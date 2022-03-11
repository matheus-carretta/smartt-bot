import React, { useState } from 'react';
import AddRobot from '../images/AddRobot.svg';
import '../styles/AddRobotSection.css';

function AddRobotSection() {
  const [robotQuantity, setRobotQuantity] = useState(2);

  return (
    <section>
      <div>
        <button
          className="addRobotBtn"
          type="button"
          onClick={() => setRobotQuantity((prevState) => prevState - 1)}
          disabled={robotQuantity <= 0}
        >
          <img src={AddRobot} alt="Add a new robot button" />
        </button>
        <div>
          <h2>Adicionar novo Robô</h2>
          <p>
            Você possui
            <span className={robotQuantity <= 0 ? 'zero-robots' : 'one-or-more-robots'}>
              {` ${robotQuantity} robôs `}
            </span>
            disponíveis
          </p>
        </div>
      </div>
    </section>
  );
}

export default AddRobotSection;
