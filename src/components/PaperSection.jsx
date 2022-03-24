import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

function PaperSection({ last_paper: lastPaper }) {
  const {
    position, paper, type, paper_value: paperValue, profit,
  } = lastPaper;

  return (
    <div className="last-paper-container">
      <div>
        <p className="last-paper-position">{position}</p>
      </div>
      <div>
        <p className="paper-name">{paper}</p>
        <p className="paper-type">{type === 0 ? 'Compra' : 'Venda' }</p>
      </div>
      <div className="profit-value-container">
        <p className="paper-value">{paperValue}</p>
        <div className={profit >= 0 ? 'profit-container positive-balance' : 'profit-container negative-balance '}>
          {profit >= 0 ? <MdArrowDropUp /> : <MdArrowDropDown />}
          <p className="profit-value">{profit}</p>
        </div>
      </div>
    </div>
  );
}

PaperSection.propTypes = {
  last_paper: PropTypes.shape({
    position: PropTypes.number,
    paper: PropTypes.string,
    type: PropTypes.string,
    paper_value: PropTypes.number,
    profit: PropTypes.number,
  }),
}.isRequired;

export default PaperSection;
