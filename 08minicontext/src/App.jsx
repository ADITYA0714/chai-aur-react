
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

    return (
        // Wrap Login and Profile inside the provider.
        // This allows both components to access the same user data.
        <UserContextProvider>

            <h1>React with Chai aur Code</h1>

            {/* This component updates the user data. */}
            <Login />

            {/* This component reads and displays the user data. */}
            <Profile />

        </UserContextProvider>
    )
}

export default App
