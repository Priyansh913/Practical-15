import React, { useState } from 'react'
import axios from 'axios'

export default function Post() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const insertData = (e) => {
        e.preventDefault()

        axios.post("https://practical-15-backend.onrender.com/submit", { name, email, age })
        .then (res => {
            alert(res.data)
        })
        .catch (err => {
            alert(err)
        })
    }    
  return (
    <div className="container">
      <h2>Insert Student's Record</h2>

      <form onSubmit={insertData}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='ENTER NAME' />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='ENTER EMAIL' />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='ENTER AGE' />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
