import React from 'react';
import "./Report.css";
import { useSelector } from 'react-redux';
import { authSlice } from '../store/authSlice';

const Reports = () => {
  
  const authState = useSelector((state) => state.auth);
  const quoteState = useSelector((state) => state.quote);

  return (
    <div className='main-report'>
      <div className='report-card'>
        <h1>Ime i prezime lika koji reporta</h1>
        <p>Sadrzaj reporta</p>
        {/* <button onClick={() => {console.log(quoteState.reports)}}>Click</button> */}
      </div>
      </div>
  )
}

export default Reports
