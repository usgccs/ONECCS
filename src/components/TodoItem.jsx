// TodoItem.jsx
import React from 'react';

function TodoItem(todo, todos, setTodos) {

  return (
    <>
    <li>
      {todo}
      <button className='btn btn-square' onClick={() => {
        setTodos(todos.filter((t) => t !== todo))
      }}>Delete</button>
    </li>
    </>
  );
}

export default TodoItem;