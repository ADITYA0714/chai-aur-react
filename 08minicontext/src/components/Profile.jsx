
import React, { useContext } from 'react'
import UserContext from '../context/usercontext'

function Profile() {

    // Read the current user data from the shared context.
    // We need user here because we want to display its values.
    const { user } = useContext(UserContext)

    // If user is null, nobody has submitted their details yet.
    // Show this message instead of trying to read user.username.
    if (!user) {
        return <div>Please Login</div>
    }

    // If user has data, display the username and password.
    return (
        <div>
            <div>Welcome {user.username}</div>
            <div>Bye {user.password}</div>
        </div>
    )
}

export default Profile
