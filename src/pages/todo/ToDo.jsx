import React, { useState } from "react";


function ToDo() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [showTodos, setShowTodos] = useState(false);


  return (
    <>
        {
            showTodos ? (
                <div>
                    <h1>Todo List</h1>
                    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button onClick={() => setTodos([...todos, todo])}>Add Todo</button>
                    <button onClick={() => setShowTodos(false)}>Hide Todos</button>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h1>Todo List</h1>
                    <button onClick={() => setShowTodos(true)}>Show Todos</button>
                </div>
            )

        }
      


    </>
  );
}

export default ToDo;
