import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleCounter from './singleCounter'
import { getUser } from '../../redux/ducks/user'

const Counters = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const user = useSelector(state => state.user.user);

    // return the new state
    const count = useSelector(state => state.counter.count);

    return (
        <>
            <div className="container" style={{ marginBottom: "0" }}>
                <div className="main">
                    <h3>{`Total Votes: ${count}`}</h3>
                </div>
            </div>
            {user && user.map((usr) => {
                const { id, firstName, lastName } = usr
                return < SingleCounter key={id} count={count} firstName={firstName} lastName={lastName} />
            })}
        </>
    )
}

export default Counters
