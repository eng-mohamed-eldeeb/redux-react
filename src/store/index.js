import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";
// creating the store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});



export default store;
