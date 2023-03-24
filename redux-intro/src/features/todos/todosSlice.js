import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    
    initialState: {
        todosData: []
    },
    
    reducers: {
        addTodo: (state, action) => {
            // console.log(action);

            //? Here, using mutating code
            //? this is not really best practice
            // state.todosData.push(action.payload);
            
            //? Here is a better practice
            // This is not mutating the state
            // It is returning a new state
            return {
                ...state,
                todosData: [action.payload, ...state.todosData]
            }
        }
    }
})

export const { addTodo } = todosSlice.actions;

// Export reducer to pass down to the store
export default todosSlice.reducer;