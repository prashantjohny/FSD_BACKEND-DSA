import React from 'react'
import axios from 'axios'

const Update = () =>{
    const handleupdate = async (e) =>{
        e.preventDefault()
        const id=e.target.id.value
        const name=e.target.name.value
        const age=e.target.age.value
        const data={name.age}
        await axios.put('http://localhost:9000/user/$(id',data)
        alert("Success")
    }
    return (
        <div>
            <h1>update User</h1>
            <form onSubmit={handleupdate}>
                <label htmlFor=""></label>
            </form>
        </div>
    )
}