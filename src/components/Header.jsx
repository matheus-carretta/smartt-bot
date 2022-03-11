import React from 'react';
import Grafic from '../images/Grafic.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <img src={Grafic} alt="Grafic Icon" />
      <div className="vertical-row" />
      <p className="header-text">
        Análise Geral
        <span className="slash">/</span>
        <span className="header-actual-page">Principal</span>
      </p>
    </header>
  );
}

export default Header;
