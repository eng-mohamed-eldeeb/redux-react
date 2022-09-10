import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    INC(state) {
      state.counter = state.counter + 1;
    },
    DEC(state) {
      state.counter--;
    },
    INC5(state, action) {
      state.counter = state.counter + action.payload;
    },
    TOOGLE(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
