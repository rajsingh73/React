import { useState } from 'react'
function App() {
  const [color, setcolor] = useState("olive")
  return (
    <div className="fixed w-full h-screen duration-200 flex items-center justify-center" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-12 px-6 py-2 bg-zinc-200 rounded-3xl">
        <div className="flex flex-wrap gap-3">
          <button className="outline-none px-5 py-1 rounded-3xl " style={{backgroundColor:"red"}} onClick={()=>{setcolor("red")}}>Red</button>
          <button className="outline-none px-5 py-1 rounded-4xl " style={{backgroundColor:"green"}} onClick={()=>{setcolor("green")}}>Green</button>
          <button className="outline-none px-5 py-1 rounded-4xl " style={{backgroundColor:"pink"}} onClick={()=>{setcolor("pink")}}>Pink</button>
          <button className="outline-none px-5 py-1 rounded-4xl " style={{backgroundColor:"olive"}} onClick={()=>{setcolor("olive")}}>Olive</button>
          <button className="outline-none px-5 py-1 rounded-4xl " style={{backgroundColor:"blue"}} onClick={()=>{setcolor("blue")}}>Blue</button>
          <button className="outline-none px-5 py-1 rounded-4xl " style={{backgroundColor:"orange"}} onClick={()=>{setcolor("orange")}}>Orange</button>
          <button className="outline-none px-5 py-1 text-black rounded-4xl " style={{backgroundColor:"yellow"}} onClick={()=>{setcolor("yellow")}}>Yellow</button>
          <button className="outline-none px-5 py-1 text-black rounded-4xl " style={{backgroundColor:"white"}} onClick={()=>{setcolor("white")}}>white</button>
          <button className="outline-none px-5 py-1 rounded-4xl " style={{backgroundColor:"black"}} onClick={()=>{setcolor("black")}}>Black</button>
          <button className="outline-none px-5 py-1 rounded-4xl " style={{backgroundColor:"#D2691E"}} onClick={()=>{setcolor("#D2691E")}}>Cream</button>
        </div>
      </div>
    </div>
  )
}

export default App
