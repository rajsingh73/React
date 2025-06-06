import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [counter,setvalue]=useState(0);
  function addvalue(){
    if(counter==20) alert("YOU CAN'T MOVE FORWARD")
    else setvalue(counter+1);
  }
  function remvalue(){
    if(counter==0) alert("YOU CAN'T MORE DOWNWARD");
    else setvalue(counter-1);
  }
  return (
    <>
    <h1>Chai aour React</h1>
    <h2>Counter project</h2>
    <h3>Value : {counter}</h3>
    <button onClick={addvalue}>Add value</button>
    <button onClick={remvalue}>Rem value</button>
    </>
  )
}
export default App
