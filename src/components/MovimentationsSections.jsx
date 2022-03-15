import React, { useContext } from 'react';
import MovimentsContext from '../context/MovimentsContext';

function MovimentationsSections() {
  const { moviment } = useContext(MovimentsContext);
  const { moviment_summary, transactions } = moviment;
  return (
    <>
      <h2 className="summary-transaction-title">Resumo geral operações</h2>
      <div className="summary-transaction-container">
        <div>
          <h4 className="transictions-title">Resumo de movimentação</h4>
          <p className={`moviments-value ${moviment_summary >= 0 ? 'positive-balance' : 'negative-balance'}`}>
            {moviment_summary < 0 ? '-' : ''}
            R$
            {moviment_summary}
            ,00
          </p>
        </div>
        <div className="all-moviments-container">
          <h4 className="transictions-title">Total de transações realizadas</h4>
          <p className="moviments-total">{transactions}</p>
        </div>
      </div>
    </>
  );
}

export default MovimentationsSections;