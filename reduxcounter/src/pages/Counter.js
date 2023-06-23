import React from 'react';
import './Counter.css';
import { counterSlice } from '../store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counterState = useSelector((state) => state.counter);
    // const broj = counterState.counter;
    

    const increase = () => {
        dispatch(counterSlice.actions.increase());
        console.log(counterState.counter)
    }

    const reset = () => {
        dispatch(counterSlice.actions.reset());
}

  return (
      <div className='main'>
          
          <div className='card'>
              <h1>{counterState.counter}</h1>
              <div>
              <button onClick={increase}>increase</button>
              <button onClick={reset}>reset</button>
             </div>
      </div>
    </div>
  )
}

export default Counter
