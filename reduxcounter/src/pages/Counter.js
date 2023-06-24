import React, { useEffect } from 'react';
import './Counter.css';
import { counterSlice } from '../store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Counter = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const counterState = useSelector((state) => state.counter);
    // const broj = counterState.counter;
     const token = localStorage.getItem("auth_token");
 
    // useEffect(() => {
     
    //   // if (token) {
    //   //   const decoded = jwtDecode(token);
    //   //   dispatch(authSlice.actions.setData(decoded))
    //   // }
    //  }, []);

  
    const increase = () => {
        dispatch(counterSlice.actions.increase());
        console.log(counterState.counter)
    }

    const reset = () => {
        dispatch(counterSlice.actions.reset());
}

  const saveCount = () => {
    dispatch(counterSlice.actions.saveValues(counterState.counter))
    console.log(counterState.savedValues)
  }
  

  return (
    <div className='main'>
      <div>
      
     </div>
          
          <div className='card'>
        <h1>{counterState.counter}</h1>
        <h1>{counterState.savedValues}</h1>
              <div>
              <button onClick={increase}>increase</button>
          <button onClick={reset}>reset</button>
          <button onClick={saveCount}>Save count</button>
             </div>
      </div>
    </div>
  )
}

export default Counter
