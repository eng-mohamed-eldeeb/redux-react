import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
  dispatch({type:'TOGGLE'})
};

  const increaseHandeler = () => {
    dispatch({type: 'INC5', amount: 5})
  }
  const counter = useSelector(state => state.counter)
  const icrementHandler = () => {
    dispatch({type: 'INC'})
    console.log(counter)
  };
  const decrementHandler = () => {
    dispatch({type: 'DEC'})
  };

  const show = useSelector(state => state.showCounter)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button disabled={!show} onClick={icrementHandler}>INCREMENT</button>
        <button disabled={!show} onClick={increaseHandeler}>INCREMENT BY 5</button>
        <button disabled={!show} onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
