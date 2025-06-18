import { useEffect,useState } from 'react'
import {ThemeProvider} from './context/theme.js'
import Theme from './components/Theme.jsx'
import Card from './components/Card.jsx'
import './App.css'
function App() {
  const [themeMode,setthememode]=useState("light")
  const lightTheme=()=>{
    setthememode("light")
  }
  const darkTheme=()=>{
    setthememode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Theme />
              </div>
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
