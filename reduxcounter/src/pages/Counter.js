import React, { useEffect } from 'react';
import './Counter.css';
import { counterSlice } from '../store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authSlice } from '../store/authSlice';

const Counter = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);
  const authState = useSelector((state) => state.auth);
    // const broj = counterState.counter;
     const token = localStorage.getItem("auth_token");
 
    // useEffect(() => {
     
    //   // if (token) {
    //   //   const decoded = jwtDecode(token);
    //   //   dispatch(authSlice.actions.setData(decoded))
    //   // }
    //  }, []);

  // useEffect(() => {}, [])
  
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
        {token ? (
           <button onClick={() => {localStorage.removeItem("auth_token")}}>Logout</button>
        ) : (
           <button onClick={() => {navigate("/login")}}>Login</button>
        )}
     </div>
          
          <div className='card'>
        <h1>{counterState.counter}</h1>
        <h1>{counterState.savedValues}</h1>
              <div>
              <button onClick={increase}>increase</button>
          <button onClick={reset}>reset</button>
          <button onClick={saveCount} disabled={!token}>Save count</button>
             </div>
      </div>
    </div>
  )
}

export default Counter
