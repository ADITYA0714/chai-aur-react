
import React, { createContext } from 'react'

// createContext() creates a common place to share data
// between components without passing props again and again.

const UserContext = createContext()

// Export the context so other files can use it,
// such as UserContextProvider, Login, and Profile.
export default UserContext
 