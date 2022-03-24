import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RobotCard.css';
import NoPaperSection from './NoPaperSection';
import PaperSection from './PaperSection';
import TopCardInfo from './TopCardInfo';
import DailyInfosSections from './DailyInfosSection';

function RobotCard(props) {
  const { robot } = props;
  const { daily_balance: dailyBalance, movimentations, last_paper: lastPaper } = robot;

  return (
    <div className="robot-card-container">
      <TopCardInfo robot={robot} />
      <div className="last-paper-infos-container">
        {lastPaper ? (<PaperSection last_paper={lastPaper} />) : (<NoPaperSection />)}
      </div>
      <DailyInfosSections balance={dailyBalance} movimentations={movimentations} />
    </div>
  );
}

RobotCard.propTypes = {
  robot: PropTypes.shape({
    daily_balance: PropTypes.number,
    movimentation: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
    })),
  }),
}.isRequired;

export default RobotCard;
