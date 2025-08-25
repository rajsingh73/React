import { useState,useEffect } from 'react'
import User from './User.jsx'
function App() {
  const [user,setuser]=useState([]);
  const [isloading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true);
    async function fetchu(){
      const res=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await res.json();
      console.log(data);
      setuser(data);
    }
    fetchu();
    setloading(false);
  },[])
  if(isloading) return <div> Loading ...</div>
  return (
    <section>
      {user.map((us)=><User key={us.id} name={us.name} website={us.website}/>)}
    </section>
  )
}

export default App
