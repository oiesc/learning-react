import React from 'react';
import { Link } from 'react-router-dom';
//imagens
import CardCalc from '../../cards/calc.jpg';
import ApiList from '../../cards/apilist.jpg';
import NoName from '../../cards/noname.jpg'

function Main() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="cards">

            <Link to="/noname">
              <div className="card">
                <div className="card-img">
                  <img src={NoName} alt="NoName" />
                </div>
                <div className="description">No Name</div>
              </div>
            </Link>

            <Link to="/apilist">
              <div className="card">
                <div className="card-img">
                  <img src={ApiList} alt="ApiList" />
                </div>
                <div className="description">Simple API List</div>
              </div>
            </Link>

            <Link to="/calculator">
              <div className="card">
                <div className="card-img">
                  <img src={CardCalc} alt="Calculator" />
                </div>
                <div className="description">Calculator</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;