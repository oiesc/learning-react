import React from 'react'
import { useHistory } from 'react-router-dom'

const ListCard = (props) => {

    let history = useHistory()

    const { list } = props
    const { id, title, completed } = list

    return (
        // send to page with item id
        <div className="card" data-v-0001 onClick={() => history.push(`apilist/item/${id}`)}>
            <div className="title">{title}</div>
            <div className="item">Completed: {completed ? 'Yes' : 'Not'}</div>
        </div>
    )
}
export default ListCard