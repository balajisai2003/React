
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showToggle);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };
  

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
