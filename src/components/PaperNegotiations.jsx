import React, { useContext } from 'react';
import MovimentsContext from '../context/MovimentsContext';

function PaperNegotiations() {
  const { moviment } = useContext(MovimentsContext);
  const { papers } = moviment;
  return (
    <div>
      <h4 className="transictions-title">Papéis negociados</h4>
      <div className="paper-negotiations-container">
        {Object.keys(moviment).length === 0 ? '' : papers.map(({ name, trasactions }) => (
          <div key={() => Math.random} className="paper-numbers-container">
            <span className="resume-paper-name">{name}</span>
            <hr className="hyphen-span" />
            <span className="transaction-number">
              {trasactions}
            </span>
            <span className="total-transactions">{ `${trasactions !== 1 ? ' transações' : ' transação'}` }</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaperNegotiations;
