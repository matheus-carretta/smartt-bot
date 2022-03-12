import React, { useEffect, useState } from 'react';
import { fetchRobotsOrveview } from '../services/api';
import '../styles/Transactions.css';

function Transaction() {
  const [moviment, setMoviment] = useState({});

  const getRobotsOverview = async () => {
    const data = await fetchRobotsOrveview();
    setMoviment(data);
  };

  useEffect(() => {
    getRobotsOverview();
  }, []);

  return (
    <section className="transactions-container">
      <h2 className="summary-transaction-title">Resumo geral operações</h2>
      <div className="summary-transaction-container">
        <div>
          <h4 className="transictions-title">Resumo de movimentação</h4>
          <p className={`moviments-value ${moviment.moviment_summary >= 0 ? 'positive-balance' : 'negative-balance'}`}>
            {moviment.moviment_summary < 0 ? '-' : ''}
            R$
            {moviment.moviment_summary}
            ,00
          </p>
        </div>
        <div className="all-moviments-container">
          <h4 className="transictions-title">Total de transações realizadas</h4>
          <p className="moviments-total">{moviment.transactions}</p>
        </div>
      </div>
      <hr className="horizontal-row" />
      <div>
        <h4 className="transictions-title">Papéis negociados</h4>
        <div className="paper-negotiations-container">
          {Object.keys(moviment).length === 0 ? '' : moviment.papers.map(({ name, trasactions }, index) => (
            <div key={index} className="paper-numbers-container">
              <span className="resume-paper-name">{name}</span>
              <span className="transaction-number">
                {trasactions}
              </span>
              <span className="total-transactions">{ ` ${trasactions > 1 ? 'transações' : 'transação'}` }</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transaction;
