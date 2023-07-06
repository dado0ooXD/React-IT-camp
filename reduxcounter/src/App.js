import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Counter from './pages/Counter';
import Login from './pages/Login/Login';
import { useEffect } from 'react';

import { useNavigate, } from 'react-router-dom';
import { counterSlice } from './store/counterSlice';
import { authSlice } from './store/authSlice';
import jwtDecode, * as ywt_decode from 'jwt-decode';
import {store} from './store/store'
import Signup from './pages/Signup/Signup';
import { ThemeProvider } from '@mui/material';
import { themeDark } from './styles/DarkTheme';
import { themeLight } from './styles/LightTheme';

const NavRoutes = () => {

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const themeState = useSelector((state) => state.theme);
  const selectedTheme = themeState.theme === "light" ? themeLight : themeDark;
  // const selectedTheme = themeState.theme === "light" ? "dark" : "light"
  // useEffect(() => {
  //   const token = localStorage.getItem("auth_token");
  //   if (token) {
  //     const decoded = jwtDecode(token);
  //     dispatch(authSlice.actions.setData(decoded))
  //   }
  //   console.log(authState)
  //  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
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
