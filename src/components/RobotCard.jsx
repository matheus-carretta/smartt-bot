import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import DownArrow from '../images/DownArrow.svg';
import '../styles/RobotCard.css';
import { getTodayDateFormat } from '../functions';

function RobotCard(props) {
  const { robot } = props;
  const {
    id, title, running, stock_codes, type, daily_balance, movimentations, last_paper,
  } = robot;

  const todayDate = getTodayDateFormat();

  return (
    <div>
      <div>
        <div>
          <h3>{title}</h3>
          <p>{running === 0 ? 'Parado' : 'Em execução'}</p>
        </div>
        <p>{id}</p>
        <div>
          <p>{stock_codes}</p>
          <p>{type}</p>
        </div>
        <div className="last_paper">
          {last_paper ? (
            <div>
              <div>
                <p>{last_paper.position}</p>
              </div>
              <div>
                <p>{last_paper.paper}</p>
                <p>{last_paper.type === 0 ? 'Compra' : 'Venda' }</p>
              </div>
              <div>
                <p>{last_paper.paper_value}</p>
                {last_paper.profit >= 0 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                <p>{last_paper.profit}</p>
              </div>

            </div>
          ) : <div>No paper</div>}
        </div>
        <div>
          <div>
            <h5>Saldo diário</h5>
            <img src={DownArrow} alt="Down arrow icon" />
            <p className={daily_balance >= 0 ? 'positive-balance' : 'negative-balance'}>{daily_balance}</p>
          </div>
          <div>
            <h5>Trades no dia</h5>
            {movimentations.reduce((acc, movimentation) => (movimentation.date.includes(todayDate)
              ? acc + 1 : acc + 0), 0)}
          </div>
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
  }),
}.isRequired;

export default RobotCard;
