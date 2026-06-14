import React from 'react'
import ReactDOM from 'react-dom/client'
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
  ReactElement
)
//  <App />
// <MyApp /> 
// ReactElement
// read about babel
