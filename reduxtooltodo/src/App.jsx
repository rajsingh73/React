import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'
import {useSelector} from 'react-redux'
function App() {
  return (
    <>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
