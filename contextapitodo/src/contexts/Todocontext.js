import { createContext,useContext } from "react";

export const TodoContext=createContext({
  todos:[
    {
      id:1,
      todo:"title",
      completed:false
    }
  ],

  addTodo : (todo)=>{},
  updateTodo : (todo,id)=>{},
  deleteTodo : (id)=>{},
  toggleComplete : (id)=>{}
})

export const useTode=()=>{
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider


