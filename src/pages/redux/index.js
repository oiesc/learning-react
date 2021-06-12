import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleCounter from './singleCounter'
import { reset } from '../../redux/ducks/counter'
import { getUser } from '../../redux/ducks/userSlice'

const Counters = () => {

    const user = useSelector((state) => state.user)

    const count = useSelector((state) => state.counter.value)

    // get user data
    // trigger action
    const dispatch = useDispatch();

    // get user
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    // reset counter value when refresh page
    useEffect(() => {
        dispatch(reset())
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
                            <h3 style={{ display: "inline-block", padding: "20px", margin: "0", marginLeft: "20px", backgroundColor: "#212529", color: "white", borderRadius: "5px" }}>{count}</h3>
                        </div>
                    </div>

                    <div className="cardsAvengers">
                        {Object.keys(user).map(function (key) {
                            const { id, firstName, lastName } = user[key]
                            return (
                                <SingleCounter key={id} count={count} id={id} firstName={firstName} lastName={lastName} />
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counters
