import React from 'react';
import Header from '../../layout/header.js';
import { Link } from 'react-router-dom';
//imagens
import CardCalc from '../../cards/calc.jpg';

function Main() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="cards">
            <Link to="/calculator">
              <div className="card">
                <div className="card-img">
                  <img src={CardCalc} alt="Calculator"/>
                </div>
                <div className="description">
                  Calculator
          </div>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;