import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Component.jsx'
function App() {
  const [count, setCount] = useState(0)
  const valueraj={
    id:"Lorem",
    image:"https://cdn.suwalls.com/wallpapers/animals/cute-kitten-37952-2880x1800.jpg"
  }
  const valueruchika={
    id:"Rustom",
    image:"https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?rs=1&pid=ImgDetMain"
  }
  return (
    <>
      <Comp arr={valueraj}/>
      <Comp arr={valueruchika}/>
    </>
  )
}

export default App
