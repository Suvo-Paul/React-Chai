import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import MacBookCard from './components/MacBookCard'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Suvo",
    age: 22
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Css</h1>
      
      <Card name="Suvo" btnText="View Profile" />

      <MacBookCard />

      <Card name="Arabinda" btnText="Visit Me" />

    </>
  )
}

export default App
