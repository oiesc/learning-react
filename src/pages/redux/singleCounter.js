import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './NoName.css';
import Button from '@material-ui/core/Button'
import { decrement, increment } from '../../redux/ducks/counter'
import { getAvatar } from '../../redux/ducks/avatar'

const Counter = (props) => {

    const avatar = useSelector((state) => state.avatar)

    const { id, firstName, lastName } = props;

    const [votes, setVotes] = useState(0);

    // trigger action
    const dispatch = useDispatch();

    // get avatar
    useEffect(() => {
        dispatch(getAvatar())
    }, [dispatch])

    // handles
    function handleIncrement() {
        return () => {
            setVotes(votes + 1)
            dispatch(increment())
        }
    }

    function handleDecrement() {
        return () => {
            if (votes > 0) {
                setVotes(votes - 1)
                dispatch(decrement())
            }
        }
    }

    return (

        <>
            <div className="card">
                <div style={{ margin: "10px 0px" }}>
                    <h4 style={{ width: "100%", display: "inline-block", padding: "10px 0", margin: "0" }}> {firstName} {lastName}</h4>
                    <h4 className="score" style={{ margin: "-40px 10px 0 0", float: "right", display: "inline-block", padding: "10px", backgroundColor: "#212529", color: "white", borderRadius: "5px" }}>{votes}</h4>
                    <div className="avatar">
                        <div className="card-img">
                            {Object.keys(avatar).map(function (key) {
                                const { id: avatarId, userid, src } = avatar[key]
                                if (id !== userid) {
                                    return null
                                }
                                return (
                                    <img key={avatarId} src={src} alt={firstName + ' ' + lastName} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="voters">
                    <Button variant="contained" onClick={handleDecrement()}>-1</Button>
                    <Button variant="contained" onClick={handleIncrement()}>+1</Button>
                </div>
            </div>
        </>
    )
}

export default Counter