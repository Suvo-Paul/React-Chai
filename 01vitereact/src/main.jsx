import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Suvo</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = " Suvo | Paul"

const reactElement = createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to vist google",
  anotherUser
)

createRoot(document.getElementById('root')).render(

  reactElement
  // <App />

)
