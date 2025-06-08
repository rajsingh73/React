import { useState,useCallback,useEffect ,useRef } from 'react'
function App() {
  const [length,setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [specialallowed,setspecialallowed]=useState(false)
  const [password,setpassword]=useState("")
  const passwordgenerater=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed) str+="0123456789";
    if(specialallowed) str+="!@#$%^&*()";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setpassword(pass);
  },[length,numberallowed,specialallowed])
  useEffect(()=>{
    passwordgenerater();
  },[length,passwordgenerater,numberallowed,specialallowed])
  const reference=useRef(null);
  function copyto(){
    reference.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className="w-full max-w-lg mx-auto my-10 text-orange-400 bg-gray-700 flex-col justify-center items-center rounded-4xl px-8 py-4">
        <p className="text-4xl text-center mb-5 text-white ">Password Generator</p>
        <div class="w-full flex justify-center items-center">
          <input type="text" value={password} ref={reference}  readOnly className="bg-white text-2xl w-3/4 h-11"/>
          <button onClick={copyto} className="h-11 cursor-pointer bg-blue-600 text-white font-bold px-5 -mx-1" >Copy</button>
        </div>
        <div className="w-full text-xl mt-5 flex justify-center items-center">
          <input className="cursor-pointer" type="range" min={8} max={20} value={length} onChange={(e)=>{setlength(e.target.value)}}/>
          <label className="ml-2">Length: {length}</label>
          <input className="ml-3" type="checkbox" defaultChecked={numberallowed} onChange={()=>{setnumberallowed((prev)=>!prev)}}/>
          <lable>Number</lable>
          <input className="ml-3" type="checkbox" defaultChecked={specialallowed} onChange={()=>{setspecialallowed((prev)=>!prev)}}/>
          <lable>Speciala</lable>
        </div>
      </div>

    </>
  )
}

export default App
