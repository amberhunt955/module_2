import { useContext } from "react";
import { MyContext } from "../App";

function Counter() {
    const ctx = useContext(MyContext);

    console.log(ctx);

    //? dispatch an action -> {type: 'add', payload: null}
    // the name 'add' is up to you
    return (
        <div>
            <h2>Counter: {ctx.state}</h2>

            <button onClick={() => ctx.dispatch( {type: 'add', payload: null} )}>Add</button>

            <button onClick={() => ctx.dispatch( {type: 'ADD_FIVE', payload: 5} )}>Add 5</button>

            <button onClick={() => ctx.dispatch( {type: 'subtract', payload: null} )}>Subtract</button>
            
            <button onClick={() => ctx.dispatch( {type: 'TIMES_THREE', payload: null} )}>Multiply by 3</button>
            
            <button onClick={() => ctx.dispatch( {type: 'DIV_BY_TWO', payload: null} )}>Divide by 2</button>
            
            <button onClick={() => ctx.dispatch( {type: 'click-me', payload: null} )}>Click Me!</button>
            
            <button onClick={() => ctx.dispatch( {type: 'reset', payload: null} )}>Reset</button>
        </div>
    )
}

export default Counter;