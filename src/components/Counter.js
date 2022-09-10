import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/counterSlice';
const Counter = () => {
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
  dispatch(counterActions.TOOGLE())
};

  const increaseHandeler = () => {
    dispatch(counterActions.INC5(10))
  }
  const counter = useSelector(state => state.counter.counter)
  const incrementHandler = () => {
    dispatch(counterActions.INC())
  };
  const decrementHandler = () => {
    dispatch(counterActions.DEC())
  };

  const show = useSelector(state => state.counter.showCounter)


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button disabled={!show} onClick={incrementHandler}>INCREMENT</button>
        <button disabled={!show} onClick={increaseHandeler}>INCREMENT BY 10</button>
        <button disabled={!show} onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
