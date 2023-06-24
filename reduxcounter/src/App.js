import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import Counter from './pages/Counter';
import Login from './pages/Login/Login';
import { useEffect } from 'react';

import { useNavigate, } from 'react-router-dom';
import { counterSlice } from './store/counterSlice';
import {store} from './store/store'

const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/login' element={ <Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

function App () {
  return (
    <Provider store={store}>
    <NavRoutes />
  </Provider>
 )
}

export default App;
