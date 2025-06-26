import {createSlice,nanoid} from '@reduxjs/toolkit'
const loadvalue=()=>{
    try{
        const todos=localStorage.getItem('todos');
        return todos?JSON.parse(todos):[{}]
    }
    catch(e){
        return [{}]
    }
}
const initialState={
    todos:loadvalue()
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const temp={id:nanoid(),text:action.payload}
            state.todos.push(temp)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer