import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './NoName.css';
import Button from '@material-ui/core/Button'
import { decrement, increment } from '../../redux/ducks/counter'
import { getAvatar } from '../../redux/ducks/avatar'

const Counter = (props) => {

    // destructured props
    const { id, firstName, lastName } = props;

    // import pictures
    const avatar = useSelector((state) => state.avatar)

    // import individual counters
    const count = useSelector((state) => state.counter)

    // trigger action
    const dispatch = useDispatch();

    // get avatar
    useEffect(() => {
        dispatch(getAvatar())
    }, [dispatch])

    // handles
    function handleIncrement(id) {
        return () => {
            dispatch(increment({ id }))
        }
    }
    function handleDecrement(id) {
        return () => {
            dispatch(decrement({ id }))
        }
    }
    return (

        <>
            <div className="card">
                <div style={{ margin: "10px 0px" }}>
                    <h4 style={{ width: "100%", display: "inline-block", padding: "10px 0", margin: "0" }}> {firstName} {lastName}</h4>
                    <h4 className="score" style={{ margin: "-40px 10px 0 0", float: "right", display: "inline-block", padding: "10px", backgroundColor: "#212529", color: "white", borderRadius: "5px" }}>{
                        // show individual counters
                        count && count.map(userCount => {
                            if (id !== userCount.id)
                                return null
                            return userCount.value
                        })
                    }</h4>
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
                    <Button variant="contained" onClick={handleDecrement(id)}>-1</Button>
                    <Button variant="contained" onClick={handleIncrement(id)}>+1</Button>
                </div>
            </div>
        </>
    )
}

export default Counter