import { createSlice, current } from "@reduxjs/toolkit";

const getInitialTodo = () =>{
    const localTodoList = window.localStorage.getItem('todoList')
    if(localTodoList){
        return JSON.parse(localTodoList)
    }
    window.localStorage.setItem('todoList', JSON.stringify([]))
    return []
}

const initialValue = {
    todoList: getInitialTodo()
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: initialValue,
    reducers:{
        addTodo:(state, action)=>{
            state.todoList.push(action.payload)
            const todoList = window.localStorage.getItem('todoList')
            if(todoList){
                const todoListArr = JSON.parse(todoList)
                todoListArr.push({...action.payload})
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
            }else{
                window.localStorage.setItem('todoList', JSON.stringify([{...action.payload}]))
            }
        },
        updateTodo:(state, action) => {
            console.log('Current state',current(state))
            const todoList = window.localStorage.getItem('todolist')
            if(todoList){
                console.log({todoList})
                const todoListArr = JSON.parse(todoList)
                console.log('todo list Arr', todoListArr)
            }
        },
        deleteTodo:(state, action)=> {
            console.log(current(state.todoList))
            const todoList = window.localStorage.getItem('todoList')
            if(todoList){
               const  todoListArr = JSON.parse(todoList)
                const remainingTodoArr = todoListArr.filter((todo)=> todo.id !== action.payload)
                window.localStorage.setItem('todoList', JSON.stringify(remainingTodoArr))
               state.todoList = remainingTodoArr
            }
        }

    }
})

export const {addTodo, updateTodo,  deleteTodo} = todoSlice.actions
export default todoSlice.reducer