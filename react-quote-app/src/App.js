import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Edit from './pages/Edit';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AllQuotes/>} />
        <Route path='/quote/:id' element={<QuoteDetails />} />
        <Route path='/editquote/:id' element={<Edit />} />
        <Route path='/login' element={ <Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;