import Chai from "./Chai"
function App() {
  let username = 'chai aur code'
  return (
    <>
    <Chai />
    <h1>Chai aur React {username}</h1>
    // yha jo bhi curly braces mei hai uska mtlb hai elvaluation expression
    // mtlb final js outcome hai wo pass kr skte hai like logic ye sb nhi 
    // like supposes username mei kuch math expression hota toh wo resolve hokr
    //username wo final evaluated value hold krta toh hum wo pass krte hai
    </>
  )
}

export default App
