import React from 'react';
import PropTypes from 'prop-types';
import { getTodayDateFormat } from '../functions';
import DownArrow from '../images/DownArrow.svg';

function DailyInfosSections({ balance, movimentations }) {
  const todayDate = getTodayDateFormat();
  return (
    <div className="daily-infos-container">
      <div>
        <div className="balance-title-container">
          <h5 className="balance-title">Saldo diário</h5>
          <img src={DownArrow} alt="Down arrow icon" />
        </div>
        <p
          className={balance >= 0
            ? ' daily-balance positive-balance'
            : ' daily-balance negative-balance'}
        >
          {balance}
        </p>
      </div>
      <div>
        <h5 className="daily-transictions-title">Trades no dia</h5>
        <p className="daily-transictions">
          {movimentations.reduce((acc, movimentation) => (movimentation.date.includes(todayDate)
            ? acc + 1 : acc + 0), 0)}
        </p>
      </div>
    </div>
  );
}

DailyInfosSections.propTypes = {
  balance: PropTypes.number,
  movimentation: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
  })),
}.isRequired;

export default DailyInfosSections;
