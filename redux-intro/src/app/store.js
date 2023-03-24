import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todosSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
})

// The store is being passed to the Provider (in index.js)
// The Provider makes it accessible for any components in our app