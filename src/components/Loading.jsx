import React from 'react';
import '../styles/Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <img src="http://www.commercialgifs.com/wp-content/uploads/2021/04/Garbi-KW-52.gif" alt="robot dancing!" className="loading-img" />
      <h1>Carregando</h1>
    </div>
  );
}

export default Loading;
