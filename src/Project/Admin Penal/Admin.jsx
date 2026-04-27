import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nevbar from '../Navbar'

function Admin() {

    <Nevbar/>

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then((res) => { setData(res.data) })
    }, [])

    const Delete = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
            .then(() => {
                alert("User Deleted");
            });
    };

    return (
        <>
            <h2>User List</h2>

            {data.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>

                    <Link to={`/editApi/${user.id}`}><button>Edit</button></Link>
                    <Link><button onClick={() => Delete(user.id)}>Delete</button></Link>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default Admin