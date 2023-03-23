import { createContext, useReducer } from "react";
import HomePage from "./pages/HomePage";
import "./App.css";

// Initialize our context
export const MyContext = createContext(null);

function App() {
  // (normally we would keep some of this logic in a separate file)
  const initialState = 0;
  // Initialize the useReducer
  // (we need to pass a reducer function and the initial state)
  const [state, dispatch] = useReducer(reducer, initialState);
  // Reducer function which will have all the logic to update the state
  function reducer(state, action) {
    console.log(action);

    // destructuring
    const { type, payload } = action;

    switch (type) {
      case "add":
        return state + 1;

      case 'ADD_FIVE':
        if (payload) {
          return state + payload;
        }
        break;
      
      case 'subtract':
        return state - 1;

      case 'TIMES_THREE':
        return state * 3;

      case 'DIV_BY_TWO':
        return state / 2;

      case 'click-me':
        return state * -1

      case 'reset':
        return state * 0;

      default:
        return state;
    }
  }

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {/* in js you can omit the keys and just pass the value because they have the same name (you don't need to write state: state or dispatch: dispatch) */}
      
      <div className="App">
        <HomePage />
      </div>

    </MyContext.Provider>
  );
}

export default App;
