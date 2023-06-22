import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Edit from './pages/Edit';
import Login from './pages/Login/Login';
import SignUp from './pages/Registration/SignUp';
import AddQuote from './pages/AddQuote/AddQuote';
import Reports from './components/Reports';

import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { authSlice } from './store/authSlice';
import Favorites from './components/Favorites';

const NavigationRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(authSlice.actions.setData(decoded))
    }
   }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllQuotes />} />
        <Route path='/addnewquote' element={<AddQuote/> } />
        <Route path='/quote/:id' element={<QuoteDetails />} />
        <Route path='/editquote/:id' element={<Edit />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/favorites' element={ <Favorites/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationRoutes/>
  </Provider>
  );
}

export default App;