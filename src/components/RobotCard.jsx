import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import DownArrow from '../images/DownArrow.svg';
import '../styles/RobotCard.css';
import { getTodayDateFormat } from '../functions';
import GreenCircle from '../images/GreenCircle.svg';
import RedCircle from '../images/RedCircle.svg';

function RobotCard(props) {
  const { robot } = props;
  const {
    id, title, running, stock_codes, type, daily_balance, movimentations, last_paper,
  } = robot;

  const todayDate = getTodayDateFormat();

  return (
    <div className="robot-card-container">
      <div className="robot-title-container">
        <h2 className={title.length > 15 ? 'robot-title minor-title' : 'robot-title'}>{title}</h2>
        <div className="running-container">
          <img
            className="circle-status"
            src={running === 0 ? RedCircle : GreenCircle}
            alt="Status color"
          />
          <p className="running-status">{running === 0 ? 'Parado' : 'Em execução'}</p>
        </div>
      </div>
      <p className="robot-id">
        #
        {id}
      </p>
      <div className="robot-process-infos">
        <p className="robot-info">Pessimista</p>
        <p className="robot-info">{stock_codes}</p>
        <p className="robot-info">{type}</p>
      </div>
      <div className="last-paper-infos-container">
        {last_paper ? (
          <div className="last-paper-container">
            <div>
              <p className="last-paper-position">{last_paper.position}</p>
            </div>
            <div>
              <p className="paper-name">{last_paper.paper}</p>
              <p className="paper-type">{last_paper.type === 0 ? 'Compra' : 'Venda' }</p>
            </div>
            <div className="profit-value-container">
              <p className="paper-value">{last_paper.paper_value}</p>
              <div className={last_paper.profit >= 0 ? 'profit-container positive-balance' : 'profit-container negative-balance '}>
                {last_paper.profit >= 0 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                <p className="profit-value">{last_paper.profit}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-paper-found">
            <p>
              Sem dados para esta sessão.
            </p>
          </div>
        )}
      </div>
      <div className="daily-infos-container">
        <div>
          <div className="balance-title-container">
            <h5 className="balance-title">Saldo diário</h5>
            <img src={DownArrow} alt="Down arrow icon" />
          </div>
          <p className={daily_balance >= 0
            ? ' daily-balance positive-balance'
            : ' daily-balance negative-balance'}
          >
            {daily_balance}
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
    </div>
  );
}

RobotCard.propTypes = {
  robot: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    running: PropTypes.number,
    stock_codes: PropTypes.string,
    type: PropTypes.string,
    daily_balance: PropTypes.number,
    movimentation: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
    })),
    last_paper: PropTypes.shape({
      position: PropTypes.number,
      paper: PropTypes.string,
      type: PropTypes.string,
      paper_value: PropTypes.number,
      profit: PropTypes.number,
    }),
  }),
}.isRequired;

export default RobotCard;
