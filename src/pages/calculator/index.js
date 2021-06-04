import './calc.css';
import React, { useState } from 'react';
import Header from '../../layout/header.js';
import Display from './display';
import Button from './buttons';

export default function Calculator() {
    // get number/simbols
    const [data, setData] = useState(() => {
        return 0
    });

    // valid values
    const operations = ['+', '-', '*', '/', '.']
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    function calc(value) {
        // clear function
        if (value === 'c') {
            return () => setData(0)
        }

        // check if the data is a valid value
        // if result is true, return the value and put in Data
        else if (operations.indexOf(value) !== -1 || numbers.indexOf(value) !== -1) {

            // check if display value is 0, if true replace with input
            if (data === '0' || data === 0) {
                if (numbers.indexOf(value) !== -1)
                    return () => setData(value)
            }
            return () => setData(prevData => prevData + value)
        }

        // result of the operation
        else if (value === '=') {
            try {
                const test = (data.toString().substring((data).length - 1))

                // check if the last value is a number or operation
                // if a number, return this
                // if a operation, don't return
                if ((operations.indexOf(test) === -1))

                    // the line below disable 'eval' warning
                    // eslint-disable-next-line
                    return () => setData(eval(data))
            }
            catch (err) {
                return () => setData("Error")
            }
        }
    }
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="calculator">
                                <Display result={data} />
                                <Button calc={calc} data={data} setData={setData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
