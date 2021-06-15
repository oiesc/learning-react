import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleCounter from './singleCounter'
import { setCounter } from '../../redux/ducks/counter'
import { getUser } from '../../redux/ducks/userSlice'

const Counters = () => {

    // import users
    const user = useSelector((state) => state.user)

    // import counter
    const count = useSelector((state) => state.counter)

    // get user data
    // trigger action
    const dispatch = useDispatch();

    // generate counter array
    function newCounters(id) {
        dispatch(setCounter({ id: parseInt(id) + 1, value: 0 }))
    }

    useEffect(() => {
        Object.keys(user).forEach(newCounters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    // get user
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <>
            <div className="container">
                <div className="main">
                    <div style={{
                        marginBottom: "30px",
                        padding: "0px 20px",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            backgroundColor: "#fff",
                            margin: "0",
                            padding: "10px",
                            borderRadius: "5px",
                            boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .2)",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <h3 style={{ display: "inline-block", padding: "20px 0", margin: "0" }}>Total Votes: </h3>
                            <h3 style={{ display: "inline-block", padding: "20px", margin: "0", marginLeft: "20px", backgroundColor: "#212529", color: "white", borderRadius: "5px" }}>{count[0].total}</h3>
                        </div>
                    </div>

                    <div className="cardsAvengers">
                        {Object.keys(user)
                            // order by first name
                            .sort((a, b) =>
                                + (user[a].firstName > user[b].firstName) ||
                                + (user[a].firstname === user[b].firstName) - 1)
                            // render card
                            .map(function (key) {
                                const { id, firstName, lastName } = user[key]
                                return (
                                    <SingleCounter key={id} id={id} firstName={firstName} lastName={lastName} />
                                )
                            })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counters
