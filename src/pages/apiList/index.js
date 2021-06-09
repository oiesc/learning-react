import './ApiList.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CircularProgress } from "@material-ui/core"
import ListCard from './ListCard'

const ApiList = () => {

    const [apilist, setApilist] = useState()
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos`)
            .then((res) => {
                const responseList = res.data
                setApilist(responseList)
            })
    }, [])

    return (
        <>
            <div className="container">
                <h3>API List</h3>

                {apilist ?
                    // if API are ok, return this
                    (
                        <div className="cards">
                            {
                                // slice -> limitar dados que serao exibidos
                                apilist.slice(0, 50).map(list => (
                                    <ListCard key={list.id} list={list} />
                                ))
                            }
                        </div>
                    )
                    // else
                    : <center><CircularProgress /></center>
                }

            </div>

        </>
    )
}
export default ApiList