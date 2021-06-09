import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Item = () => {

    let history = useHistory()

    const [itemDetails, setItemDetails] = useState()

    // react hook to get destructured id
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                const responseItem = res.data
                setItemDetails(responseItem)
            })
    }, [id])

    const { id: itemId, userId, title, completed } = itemDetails || {};

    return (
        <>
            {itemDetails ? (
                <div className="container" data-v-0003>
                    <div className="main" data-v-0002>
                        <h4>{title}</h4>
                        <p>{`Item id: ${itemId}`}</p>
                        <p>{`User id: ${userId}`}</p>
                        <p>Completed: {completed ? 'yes' : 'not'}</p>
                    </div>
                    <Button variant="contained" onClick={() => history.push(`../../apilist`)}><ArrowBackIcon />Back</Button>
                </div>
            )
                : <center><CircularProgress /></center>
            }
        </>
    )
}

export default Item;