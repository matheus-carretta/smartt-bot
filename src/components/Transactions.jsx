import React from 'react';
import '../styles/Transactions.css';
import MovimentationsSections from './MovimentationsSections';
import PaperNegotiations from './PaperNegotiations';

function Transactions() {
  return (
    <section className="transactions-container">
      <MovimentationsSections />
      <hr className="horizontal-row" />
      <PaperNegotiations />
    </section>
  );
}

export default Transactions;
