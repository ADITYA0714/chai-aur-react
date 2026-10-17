import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'
function MyApp(){
  return (
    <div>
      <h1>Custom | App | Chai</h1>
    </div>
  )
}
// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children: 'Click me to visit Google'
// }


const ReactElement = React.createElement(
  'a',
  {href:'https://microsoft.com',target:'_blank'},
  'click to land at microsoft'
)


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  // ReactElement - we wrote this directly like this beacuse when we used this    
  //<anotherElement /> parsing and all where done it must be expecting fn but  
  // actually this is not therefore to run this directly object name is given
  // <>
  // {/* <anotherElement /> */}
  // <MyApp />
  // </>
  anotherElement
)
// <MyApp /> 
// ReactElement
// read about babel
