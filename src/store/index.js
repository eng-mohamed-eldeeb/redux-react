import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return {
        counter: state.counter ++
    }
  }
  if(action.type === 'DEC') {
    return {
        counter: state.counter--
    }
  }
  return state;
};

const store = createStore(counterReducer);

export default store;