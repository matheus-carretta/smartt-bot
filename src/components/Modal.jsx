import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';
// import { createRobot } from '../services/api';

function Modal({ onClose = () => {} }, setRobotQuantity) {
  const [name, setName] = useState('');
  const [initialValue, setInitialValue] = useState(0);
  const [strategy, setStrategy] = useState(2); // 2 = Tangram, 1 = Price Action

  const handleOutsideClick = ({ target }) => {
    if (target.id === 'modal') {
      onClose();
      setName('');
      setInitialValue(0);
      setStrategy(2);
    }
  };

  const requestBody = {
    title: name,
    mode: 0,
    strategy_id: strategy,
    initial_capital: parseFloat(initialValue),
    simulation: 0,
    broker_id: 1,
  };

  const sendRobotInfo = (body) => {
    console.log(body);
    setRobotQuantity((prevState) => prevState - 1);
  };

  return (
    <div
      id="modal"
      aria-hidden="true"
      className="modal"
      onClick={handleOutsideClick}
    >
      <div className="container">
        <div className="top-form-modal">
          <p className="add-title">Adicionar novo Robô</p>
          <button type="button" className="close" onClick={onClose}>X</button>
        </div>
        <h1 className="form-title">Vamos criar seu robô</h1>
        <h4 className="form-subtitle">Preencha as informações abaixo:</h4>
        <form>
          <label className="input-label" htmlFor="robotName">
            Nome do produto
            <br />
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
              className="form-input"
              type="text"
              id="robotName"
              placeholder="Nome do produto"
              required
            />
          </label>
          <label className="input-label" htmlFor="initialCapital">
            Capital inicial do robô
            <br />
            <input
              value={initialValue}
              onChange={({ target }) => setInitialValue(target.value)}
              className="form-input"
              required
              type="number"
              id="initialCapital"
              placeholder="R$"
            />
          </label>
          <h2 className="select-btn-title">Selecione uma das estratégias abaixo</h2>
          <button className={strategy === 2 ? 'selected' : 'not-selected'} type="button" onClick={() => setStrategy(2)}>Tangram</button>
          <button className={strategy === 2 ? 'not-selected' : 'selected'} type="button" onClick={() => setStrategy(1)}>Price Action</button>
          <div className="bottom-form-btns">
            <button className="cancel-btn" type="button" onClick={onClose}>Cancelar</button>
            <button className="confirm-btn" type="button" onClick={() => sendRobotInfo(requestBody)}>Criar robô</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
