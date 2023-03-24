import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the counter state, reducers, and actions
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
        state.value -= 1;
    },

    incrementByAmount: (state, action) => {
        // console.log(action);
        state.value += action.payload;
    },

    reset: (state) => {
        state.value *= 0;
    }
  },
});

// Export the actions
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
