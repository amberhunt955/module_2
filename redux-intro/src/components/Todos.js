import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/todos/todosSlice";

function Todos() {
    // state is going through the store and looking for the right name
    // we have two names - todos, and counter
    // here we are looking for todos, so it finds todos
    const todos = useSelector(state => state.todos.todosData);
    // console.log(todos);

    const [text, setText] = useState('');
    
    const dispatch = useDispatch();
   
    return (
        <div className="todos-container">
            <h2>Todos</h2>

            <label>
                Create todo:
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <button onClick={() => dispatch(addTodo( { id:uuidv4(), text: text } ) )}>Create</button>
            </label>

            <div>
                {todos.map(item => {
                    return <li key={item.id}>{item.text}</li>
                })}
            </div>
        </div>
    )
}

export default Todos;