import { useState } from "react";
import TodoItem from "./TodoItem";
import { useEffect } from "react";


const AddTodo = () =>  {
  
const [todos, setTodos] = localStorage.getItem('todos') ? useState(JSON.parse(localStorage.getItem('todos'))) : useState([])
const [newTodo, setNewTodo] = useState("");
  
const addTodo = () => {
   const updatedTodo = [...todos, newTodo]
   setTodos(updatedTodo)
}

useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
},[todos])

const removeTodo = (i)=>{
    const deleteArray = todos.filter((_, e)=> e !== i)
    setTodos(deleteArray)
}

    return (
        <>
        <h2>Welcome to ur todo-list:</h2>
        <input type="text" placeholder="Add Todo" onChange={(e)=> setNewTodo(e.target.value)}/>
        <button onClick={addTodo} type="submit">Add todo</button>
        <ul>
        {todos.map((todo, i) => <TodoItem key={i} todo = {todo} index= {i} removeTodo={removeTodo}/>)} 

        </ul>
        </>
    )
}

export default AddTodo;