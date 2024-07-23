import React, { useEffect, useState } from "react";
import TodoItem from "../../components/TodoItem";

function ToDo() {

    const [todo, setTodo] = useState(""); 
    const [todos, setTodos] = useState([]);

    const [showTodos, setShowTodos] = useState(false); 


    const [counter, setCounter] = useState(0);


    /*
    SUMMARY:
    UseStates are used to store values in a component.
    UseStates of arrays and booleans.
    Conditional rendering.
    Onclicks and OnChanges.
    */


    //Array UseState explanation
    //todos = [sam, min8]
    // ...todos = sam, min8
    //[sam, min8, cj]

    useEffect(() => {
    }, [counter])


    const handleClick = () => {
        setShowTodos(!showTodos);
    }



  return (
    <>

{
    //Conditional rendering
    showTodos ? (
        <div>
            <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} />
            <button onClick={() => setTodos([...todos, todo])}>Add</button>

            {//Mapping of arrays
                todos.map((todo, index) => {
                    return <div key={index}>
                        <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
                    </div>
                })
            }        

            <button onClick={() => setShowTodos(false)}>Hide Todos</button>

        </div>
    ) : (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setShowTodos(true)}>Show Todos</button>
        </div>
    )

}

    </>
  );
}

export default ToDo;
