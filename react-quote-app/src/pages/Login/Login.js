import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className='login-main'>
          <div className='form-wrapper'>
              <div style={{fontWeight: 'bold'}}>Login form</div>
              <div>
              <input name='email' placeholder='email' />
              </div>
              <div>
              <input name='password' placeholder='password'/>
             </div>
              <div>
                  <button className='login-btn'>Login</button>
 </div>
      </div>
    </div>
  )
}

export default Login;
