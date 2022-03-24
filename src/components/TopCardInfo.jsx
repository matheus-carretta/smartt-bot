import React from 'react';
import PropTypes from 'prop-types';
import GreenCircle from '../images/GreenCircle.svg';
import RedCircle from '../images/RedCircle.svg';

function TopCardInfo(props) {
  const { robot } = props;
  const {
    title, running, simulation, stock_codes: stockCodes, type, id,
  } = robot;
  return (
    <>
      <div className="robot-title-container">
        <h2 data-testid={title} className={title.length > 15 ? 'robot-title minor-title' : 'robot-title'}>{title}</h2>
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
        <p className="robot-info">{simulation === 0 ? 'Pessimista' : 'Otimista'}</p>
        <p className="robot-info">{stockCodes}</p>
        <p className="robot-info">{type}</p>
      </div>
    </>
  );
}

TopCardInfo.propTypes = {
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
  }),
}.isRequired;

export default TopCardInfo;
