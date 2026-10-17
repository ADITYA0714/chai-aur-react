
import React, { useState, useContext } from 'react'
import UserContext from '../context/usercontext'

function Login() {

    // These states temporarily store what the user types
    // into the username and password input fields.
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // useContext lets us access the data shared by UserContext.Provider.
    // We only need setUser here because our job is to update user data.
    const { setUser } = useContext(UserContext)

    // This function runs when the form is submitted.
    const handleSubmit = (e) => {

        // Prevent the browser from refreshing the page
        // when the form is submitted.
        e.preventDefault()

        // Save both username and password as one object in context.
        // setUser updates the shared user state.
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>

            {/* value connects the input to the username state.
                onChange updates username whenever the user types. */}
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />

            <br />

            {/* This input works the same way, but stores the password. */}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            <br />

            {/* Clicking Submit calls handleSubmit. */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
