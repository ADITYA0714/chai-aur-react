import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold text-red-500 bg-gray-400 p-3 rounded'>Todo Application : For Focus Goal</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
