// Normally this file might be in the counter folder
// But keeping it in component

//? Selector reads data, dispatch sends out actions
import { useSelector, useDispatch } from "react-redux";

//? Actions
import { increment, decrement, incrementByAmount, reset } from "../features/counter/counterSlice";

function Counter() {
  // Selector reads data
  const count = useSelector((state) => state.counter.value); // counter is the name we gave it in the counter slice

  // Dispatch sends out actions
  const dispatch = useDispatch();

  // actions in the onClicks need parenthesis to work because they are action creator functions
  return (
    <div className="counter-container">
      <h2>Counter</h2>

      <span>{count}</span>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>

      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
