import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/ducks/counter'
import './NoName.css';

const Counter = (props) => {

    const { firstName, lastName } = (props)

    const [votes, setVotes] = useState(0)

    // trigger action
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
        setVotes(votes + 1)
    };
    const handleDecrement = () => {
        if (votes > 0) {
            dispatch(decrement())
            setVotes(votes - 1)
        }
    };

    return (
        <div className="container" data-v-0004>
            <div className="main" data-v-0004>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <div style={{ marginBottom: "5px" }}>
                        <h5>{firstName} {lastName}: {votes}</h5>
                    </div>
                    <div className="break"></div>
                    <div className="voters">
                        <button onClick={handleDecrement}>Decrement</button>
                        <button onClick={handleIncrement}>Increment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter