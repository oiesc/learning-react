import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/ducks/counter'
import './NoName.css';
import { getAvatar } from "../../redux/ducks/avatar"
import Button from '@material-ui/core/Button'

const Counter = (props) => {

    // return the new state
    const avatar = useSelector(state => state.avatar.avatar);

    const { id, firstName, lastName } = (props);

    const [votes, setVotes] = useState(0);

    // trigger action
    const dispatch = useDispatch();

    // trigger getAvatar from jsondb
    useEffect(() => {
        dispatch(getAvatar())
    }, [dispatch])


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

        <>
            <div className="card">
                <div style={{ margin: "10px 0px" }}>
                    <h4 style={{ display: "inline-block", padding: "10px", margin: "0" }}>{firstName} {lastName}: </h4>
                    <h4 className="score" style={{ display: "inline-block", padding: "10px", margin: "0", backgroundColor: "#212529", color: "white", borderRadius: "5px" }}>{votes}</h4>
                    <div className="avatar">
                        <div className="card-img">
                            {avatar && avatar.map(ico => {
                                const { id: idAvatar, userid, src } = ico
                                if (id === userid) {
                                    return (
                                        <img key={idAvatar} src={src} alt={firstName + ' ' + lastName} />
                                    )
                                }
                                else
                                    return null
                            })}
                        </div>
                    </div>
                </div>
                <div className="voters">
                    <Button variant="contained" onClick={handleDecrement}>-1</Button>
                    <Button variant="contained" onClick={handleIncrement}>+1</Button>
                </div>
            </div>
        </>
    )
}

export default Counter