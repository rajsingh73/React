import React from 'react'
import {useParams} from 'react-router-dom'
function Params(){
    const {userid}=useParams()
    return(
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>value:{userid}</div>
    )
}
export default Params