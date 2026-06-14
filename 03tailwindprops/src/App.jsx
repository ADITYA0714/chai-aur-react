import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name : "Aditya",
    age : "21"
  }
  const myArr = [1,2,3,4,5];

  return (
    <>
      <h1 className='text-red-500 mb-4 bg-green-300 font-semibold p-5 rounded-xl text-4xl'>Tailwind test</h1>
      <Card channel="chaiaurcode" btnText="DSA" someObject = {myObj} someArr = {myArr}/>
      <Card channel="Adityabuilder" />
    </>
  )
}

export default App
