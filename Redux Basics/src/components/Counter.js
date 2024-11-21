
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/storeIndex';
import classes from './Counter.module.css';


const Counter = () => {
  const counter = useSelector(({counter}) => counter.counter);
  const toggle = useSelector(({counter}) => counter.showToggle);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };


  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>dispatch(counterActions.increment)}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={()=>dispatch(counterActions.decrement)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
