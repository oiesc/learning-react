import React from 'react';

const Calc = (props) => {

    return (
        <>
            <div className="row">
                <button onClick={props.calc('c')} type="button" className="btn btn-dark btn-lg clear font-weight-light">C</button>
                <button onClick={props.calc('/')} type="button" className="btn btn-dark btn-lg font-weight-light">/</button>
                <button onClick={props.calc('*')} type="button" className="btn btn-dark btn-lg font-weight-light">x</button>
            </div>

            <div className="row">
                <button onClick={props.calc('7')} type="button" className="btn btn-dark btn-lg font-weight-light">7</button>
                <button onClick={props.calc('8')} type="button" className="btn btn-dark btn-lg font-weight-light">8</button>
                <button onClick={props.calc('9')} type="button" className="btn btn-dark btn-lg font-weight-light">9</button>
                <button onClick={props.calc('-')} type="button" className="btn btn-dark btn-lg font-weight-light">-</button>
            </div>

            <div className="row">
                <button onClick={props.calc('4')} type="button" className="btn btn-dark btn-lg font-weight-light">4</button>
                <button onClick={props.calc('5')} type="button" className="btn btn-dark btn-lg font-weight-light">5</button>
                <button onClick={props.calc('6')} type="button" className="btn btn-dark btn-lg font-weight-light">6</button>
                <button onClick={props.calc('+')} type="button" className="btn btn-dark btn-lg font-weight-light">+</button>
            </div>

            <div className="row">
                <button onClick={props.calc('1')} type="button" className="btn btn-dark btn-lg font-weight-light">1</button>
                <button onClick={props.calc('2')} type="button" className="btn btn-dark btn-lg font-weight-light">2</button>
                <button onClick={props.calc('3')} type="button" className="btn btn-dark btn-lg font-weight-light">3</button>
                <button onClick={props.calc('=')} type="button" className="btn btn-dark btn-lg enter">=</button>
            </div>

            <div className="row" style={{ marginTop: -60 }}>
                <button onClick={props.calc('0')} type="button" className="btn btn-dark zero btn-lg font-weight-light">0</button>
                <button onClick={props.calc('.')} type="button" className="btn btn-dark btn-lg font-weight-light">.</button>
            </div>
        </>
    );
}
export default Calc;