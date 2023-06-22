import React from 'react';
import "./Report.css";
import { useSelector } from 'react-redux';
import { authSlice } from '../store/authSlice';

const Reports = () => {
  
  const authState = useSelector((state) => state.auth);
  const quoteState = useSelector((state) => state.quote);

  return (
    <div className='main-report'>
      {quoteState.reports.map((item, index) => {
        return <div className='report-card'>
          <h1>{item.user.fullName }</h1>
          <p>{item.reportMessage}</p>
        {/* <button onClick={() => {console.log(quoteState.reports)}}>Click</button> */}
      </div>
      })}
      </div>
  )
}

export default Reports
