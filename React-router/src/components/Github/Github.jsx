import {useState,useEffect} from 'react'
function Github(){
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/rajsingh73')
        .then((res)=>res.json())
        .then((res)=>setdata(res))
    })
    return (
    <div className='flex flex-col items-center justify-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    )
}
export default Github