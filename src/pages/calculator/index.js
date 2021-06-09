import './Calc.css';
import React, { useState } from 'react';
import Display from './Display';
import Button from './Buttons';

export default function Calculator() {
    // get number/simbols
    const [data, setData] = useState(() => {
        return 0
    });

    // dot rules
    const [dot, setDot] = useState(true)

    // valid values
    const operations = ['+', '-', '*', '/', '.']
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    function calc(value) {
        // clear
        if (value === 'C') {
            return () => {
                setDot(true)
                setData(0)
            }
        }

        // cancel entry
        else if (value === 'CE') {
            // remove last value from the string
            const aux = data.toString().substring(0, (data).length - 1);

            // get the last value inserted
            const aux1 = data.toString().substring((data).length - 1);

            // replace null value with zero
            if (aux === '')
                return () => {
                    setData(0)
                }

            // if the value is a dot, restore the setDot to true
            if (aux1 === '.') {
                return () => {
                    setDot(true)
                    setData(aux)
                }
            }
            else {
                return () => {
                    setData(aux)
                }
            }
        }

        // check if the data is a valid value
        // if result is true, return the value and put in Data
        else if (operations.indexOf(value) !== -1 || numbers.indexOf(value) !== -1) {

            // check if display value is 0, if true replace with input
            if (data === '0' || data === 0) {
                if (numbers.indexOf(value) !== -1)
                    return () => {
                        // enable dot
                        setDot(true)
                        setData(value)
                    }
            }
            // check if input is dot
            else if ((operations.indexOf(value) !== -1) && value === '.') {

                // if true, put dot on data and set 'dot' to false
                if (dot === true) {
                    return () => {
                        setDot(false)
                        setData(prevData => prevData + value)
                    }
                }
                else {
                    return () => data
                }
            }
            else if ((operations.indexOf(value) !== -1) && value !== '.') {
                return () => {
                    // dot is enable again
                    setDot(true)
                    setData(prevData => prevData + value)
                }
            }
            return () => setData(prevData => prevData + value)
        }

        // result of the operation
        else if (value === '=') {

            const compare = (data.toString().substring((data).length - 1))

            // check if the last value is a number or operation
            // if a number, return this
            // if a operation, don't return
            if ((operations.indexOf(compare) === -1))
                return () => {
                    try {
                        // the line below disable 'eval' warning
                        // eslint-disable-next-line
                        setData(String(eval(data)))
                    }
                    catch (err) {
                        setData("error")
                    }
                }
        }
    }

    return (
        <>
            <div className="container">
                <div className="main">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="calculator">
                                <Display result={data} />
                                <Button calc={calc} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}