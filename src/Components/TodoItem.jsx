

const TodoItem = ({ removeTodo, todo, index}) => {

    return( <>  
    <li>{todo}</li>
    <button onClick={()=> removeTodo(index)}>Delete button</button>
    </>)};
  
  export default TodoItem;
        