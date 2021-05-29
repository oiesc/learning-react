import './calc.css';
import React, { useState } from 'react';
import Header from '../../layout/header.js';
import Display from './display';
import Button from './buttons';

export default function Calculator() {

    const [number, setNumber] = useState(0);

    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="calculator">
                                <Display result={number} />
                                <Button number={number} setNumber={setNumber} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
