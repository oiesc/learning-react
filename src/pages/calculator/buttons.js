import React from 'react';

const Calc = (props) => {
    const { calc } = props

    // mapping separate rows, just for practice
    const row1 = [
        { id: '1', value: 'C', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '2', value: 'CE', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '3', value: '/', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '4', value: '*', className: 'btn btn-dark btn-lg font-weight-light' }
    ]
    const row2 = [
        { id: '1', value: '7', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '2', value: '8', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '3', value: '9', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '4', value: '-', className: 'btn btn-dark btn-lg font-weight-light' }
    ]
    const row3 = [
        { id: '1', value: '4', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '2', value: '5', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '3', value: '6', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '4', value: '+', className: 'btn btn-dark btn-lg font-weight-light' }
    ]
    const row4 = [
        { id: '1', value: '1', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '2', value: '2', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '3', value: '3', className: 'btn btn-dark btn-lg font-weight-light' },
        { id: '4', value: '=', className: 'btn btn-dark btn-lg font-weight-light enter' }
    ]
    const row5 = [
        { id: '1', value: '0', className: 'btn btn-dark btn-lg font-weight-light zero' },
        { id: '2', value: '.', className: 'btn btn-dark btn-lg font-weight-light' }
    ]
    return (
        <>
            <div className="row">
                {row1.map((rowone) => {
                    const { value, className } = rowone
                    return <button key={rowone.id} onClick={calc(value)} type="button" className={className}>{value}</button>
                })}
            </div>

            <div className="row">
                {row2.map((rowtwo) => {
                    const { value, className } = rowtwo
                    return <button key={rowtwo.id} onClick={calc(value)} type="button" className={className}>{value}</button>
                })}
            </div>

            <div className="row">
                {row3.map((rowthree) => {
                    const { value, className } = rowthree
                    return <button key={rowthree.id} onClick={calc(value)} type="button" className={className}>{value}</button>
                })}
            </div>

            <div className="row">
                {row4.map((rowfour) => {
                    const { value, className } = rowfour
                    return <button key={rowfour.id} onClick={calc(value)} type="button" className={className}>{value}</button>
                })}
            </div>

            <div className="row" style={{ marginTop: -60 }}>
                {row5.map((rowfive) => {
                    const { value, className } = rowfive
                    return <button key={rowfive.id} onClick={calc(value)} type="button" className={className}>{value}</button>
                })}
            </div>
        </>
    );
}
export default Calc;