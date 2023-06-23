import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';

import Counter from './pages/Counter';
import { useNavigate, } from 'react-router-dom';
import { counterSlice } from './store/counterSlice';
import {store} from './store/store'

const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Counter/>} />
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
