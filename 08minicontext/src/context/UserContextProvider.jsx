
import React, { useState } from 'react'
import UserContext from './usercontext'

const UserContextProvider = ({ children }) => {

    // user stores the current user's data.
    // Initially, user is null, meaning no user has logged in yet.
    const [user, setUser] = useState(null)

    // setUser is a function that updates the user data.
    // We can store an object, string, number, or other values in user.
    // Here, we will store the username and password in an object.

    return (
        // UserContext.Provider shares the user data with
        // every component inside this provider.
        <UserContext.Provider value={{ user, setUser }}>

            {/* children means all components placed inside this provider.
                They can now access user and setUser using useContext. */}
            {children}

        </UserContext.Provider>
    )
}

export default UserContextProvider
