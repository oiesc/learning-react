import React from 'react';

export default props => {

    function Calc(type, value) {

        if (type === 'action') {
            switch (value) {
                case 'c':
                    return () => props.setNumber(0);
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                case '.':
                    return () => props.setNumber(props.number + value);
                    break;
                case '=':
                    return () => props.setNumber(eval(props.number));
                    break;
            }
        }
        else if (type === 'value') {
            if (props.number === '0' || props.number === 0) {
                return () => props.setNumber(value);
            }
            return () => props.setNumber(props.number + value);
        }
    }
    return (
        <>
            <div className="row">
                <button onClick={Calc('action', 'c')} label="C" type="button" className="btn btn-dark btn-lg clear font-weight-light">C</button>
                <button onClick={Calc('action', '/')} label="/" type="button" className="btn btn-dark btn-lg font-weight-light">/</button>
                <button onClick={Calc('action', '*')} label="*" type="button" className="btn btn-dark btn-lg font-weight-light">x</button>
            </div>

            <div className="row">
                <button onClick={Calc('value', '7')} type="button" className="btn btn-dark btn-lg font-weight-light">7</button>
                <button onClick={Calc('value', '8')} label="8" type="button" className="btn btn-dark btn-lg font-weight-light">8</button>
                <button onClick={Calc('value', '9')} label="9" type="button" className="btn btn-dark btn-lg font-weight-light">9</button>
                <button onClick={Calc('action', '-')} label="-" type="button" className="btn btn-dark btn-lg font-weight-light">-</button>
            </div>

            <div className="row">
                <button onClick={Calc('value', '4')} label="4" type="button" type="button" className="btn btn-dark btn-lg font-weight-light">4</button>
                <button onClick={Calc('value', '5')} label="5" type="button" type="button" className="btn btn-dark btn-lg font-weight-light">5</button>
                <button onClick={Calc('value', '6')} label="6" type="button" type="button" className="btn btn-dark btn-lg font-weight-light">6</button>
                <button onClick={Calc('action', '+')} label="+" type="button" type="button" className="btn btn-dark btn-lg font-weight-light">+</button>
            </div>

            <div className="row">
                <button onClick={Calc('value', '1')} label="1" type="button" className="btn btn-dark btn-lg font-weight-light">1</button>
                <button onClick={Calc('value', '2')} label="2" type="button" className="btn btn-dark btn-lg font-weight-light">2</button>
                <button onClick={Calc('value', '3')} label="3" type="button" className="btn btn-dark btn-lg font-weight-light">3</button>
                <button onClick={Calc('action', '=')} label="=" type="button" className="btn btn-dark btn-lg enter">=</button>
            </div>

            <div className="row" style={{ marginTop: -60 }}>
                <button onClick={Calc('value', '0')} label="0" type="button" className="btn btn-dark zero btn-lg font-weight-light">0</button>
                <button onClick={Calc('action', '.')} label="." type="button" className="btn btn-dark btn-lg font-weight-light">.</button>
            </div>
        </>
    );
}