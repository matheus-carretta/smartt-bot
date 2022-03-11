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
    <section>
      <h2>Resumo geral operações</h2>
      <div>
        <h4>Resumo de movimentação</h4>
        <p>
          R$
          {moviment.moviment_summary}
          ,00
        </p>
      </div>
      <div>
        <h4>Total de transações realizadas</h4>
        <p>{moviment.transactions}</p>
      </div>
      <hr className="horizontal-row" />
      <div>
        <h4>Papéis negociados</h4>
        {Object.keys(moviment).length === 0 ? '' : moviment.papers.map(({ name, trasactions }, index) => (
          <div key={index}>
            <span>{name}</span>
            <span>{`${trasactions} ${trasactions > 1 ? 'transações' : 'transação'}` }</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Transaction;
