import React from 'react';
import { Link } from 'react-router-dom';
//imagens
import CardCalc from '../../cards/calc.jpg';
import ApiList from '../../cards/apilist.jpg';
import Redux from '../../cards/noname.jpg'

function Main() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="cards">

            <Link to="/redux">
              <div className="card">
                <div className="card-img">
                  <img src={Redux} alt="Redux" />
                </div>
                <div className="description"><p>Increment/decrement with redux</p></div>
              </div>
            </Link>

            <Link to="/apilist">
              <div className="card">
                <div className="card-img">
                  <img src={ApiList} alt="ApiList" />
                </div>
                <div className="description"><p>Simple API List</p></div>
              </div>
            </Link>

            <Link to="/calculator">
              <div className="card">
                <div className="card-img">
                  <img src={CardCalc} alt="Calculator" />
                </div>
                <div className="description"><p>Calculator</p></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;