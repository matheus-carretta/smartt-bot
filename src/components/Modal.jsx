import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function Modal({ onClose = () => {} }) {
  const handleOutsideClick = ({ target }) => {
    if (target.id === 'modal') onClose();
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
              className="form-input"
              required
              type="number"
              id="initialCapital"
              placeholder="R$"
            />
          </label>
          <h2 className="select-btn-title">Selecione uma das estratégias abaixo</h2>
          <button className="selected" type="button">Tangram</button>
          <button className="not-selected" type="button">Price Action</button>
          <div className="bottom-form-btns">
            <button className="cancel-btn" type="button" onClick={onClose}>Cancelar</button>
            <button className="confirm-btn" type="button">Criar robô</button>
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
