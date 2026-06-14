import { useState } from "react";

function App() {
  let [counter, setCounter]=useState(0)
  // let counter = 4;

  const addValue = ()=>{
    counter++;
    if(counter>20) counter = 20;
    console.log("add value ",counter);
    setCounter(counter)
  }
  const removeValue = ()=>{
    counter--;
    if(counter<0) counter = 0;
    console.log("remove value ", counter);
    setCounter(counter);
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
