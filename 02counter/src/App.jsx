import { useState } from "react";

function App() {
  let [counter, setCounter]=useState(0)
  // let counter = 4;

  const addValue = ()=>{
    counter++;
    if(counter>20) counter = 20;
    console.log("add value ",counter);
    
    /*
    “React batches state updates for performance, so if I call 
    setCounter(counter++) multiple times, each call uses the old value of
    counter and doesn’t accumulate correctly. To solve this, 
    React provides a functional form of setState (or useState), 
    where I pass a callback that receives the latest state. 
    This ensures each update is applied sequentially, even when 
    batched. That’s why setCounter(prev => prev + 1) works reliably.”
    */

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
