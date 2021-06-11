import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleCounter from './singleCounter'
import { getUser } from '../../redux/ducks/user'

const Counters = () => {

    const dispatch = useDispatch()

    // trigger getUser from jsondb
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    // return the new state
    const user = useSelector(state => state.user.user);

    // return the new state
    const count = useSelector(state => state.counter.count);

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
                        {user && user.map(usr => {
                            const { id, firstName, lastName } = usr
                            return <SingleCounter key={id} id={id} count={count} firstName={firstName} lastName={lastName} />
                        })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counters
