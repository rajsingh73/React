import {createContext,useContext} from 'react'
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            complete:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider;