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
  const token = localStorage.getItem("auth_token");
  
    const increase = () => {
        dispatch(counterSlice.actions.increase());
        console.log(counterState.counter)
    }

    const reset = () => {
        dispatch(counterSlice.actions.reset());
    }

  const saveCount = () => {

    const datum = new Date();
    const year = datum.getFullYear();
    const month = datum.getMonth() + 1;
    const day = datum.getDate();
    // console.log(year, month, day);

    const savedAt = `${day}/${month}/${year}`;
    const savedData = {
      count: counterState.counter,
      savedAt: savedAt,
      fullName: authState.fullName,
      id: authState.id
    }

    dispatch(counterSlice.actions.saveValues(savedData))
    console.log(counterState.savedValues);
    console.log("auth state", authState)
  }
  

  return (
    <div className='main'>  
      <div className='card'>
        <div className='login'>
   <button onClick={() => {navigate("/login")}}>Login</button>
     </div>
        <div className='counter'>
        <div>
        <h1>{counterState.counter}</h1>
        <h1>{counterState.savedValues.count}</h1>
        </div>
              <div>
              <button className='increase' onClick={increase}>increase</button>
          <button className="reset" onClick={reset}>reset</button>
          <button className='save-count' onClick={saveCount} disabled={!authState.id}>Save count</button>
             </div>
      </div>
        </div>

      {/* <div className='sacuvani-countovi'> */}
        {counterState.savedValues.map((item, index) =>
        (<div className='sacuvani-countovi' key={index}>
          <h1>Ime korisnika: {item.fullName}</h1>
          <h3>Count: {item.count}</h3>
          <h5>SavedAt: {item.savedAt }</h5>
          <h6>ID korisnika: {item.id }</h6>
        </div>))}
      {/* </div> */}
    </div>
  )
}

export default Counter
