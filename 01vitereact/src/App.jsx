import Chai from "./Chai"
function App() {
  let username = 'chai aur code'
  return (
    <>
    <Chai />
    <h1>Chai aur React {username}</h1>
    // yha jo bhi curly braces mei hai uska mtlb hai elvaluation expression
    // mtlb finally outcome hai wo pass kr skte hai like logic ye sb nhi 
    </>
  )
}

export default App
