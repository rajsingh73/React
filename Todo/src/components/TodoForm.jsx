import {useState} from 'react'
import {useTodo} from '../context/index.js'
function TodoForm() {
    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()
    const handle=(e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,complete:false})
        setTodo("")
    }
    return (
        <form onSubmit={handle}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

