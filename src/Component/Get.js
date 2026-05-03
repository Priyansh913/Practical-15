import React, { useEffect, useState, memo } from 'react'
import axios from 'axios'

function Get() {
    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)

    useEffect (() => {
        axios.get("https://practical-15-backend.onrender.com/fetchdata")
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
            console.log("Error")
            alert(err)
        })
    }, [status])

  return (
        <div className="container">
            <h2>Display Student's Record</h2>

            {status && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(d => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <button onClick={() => setStatus(!status)}>
                {status ? "Hide Data" : "Click to Display Records"}
            </button>
        </div>
    )
}

export default memo(Get)
