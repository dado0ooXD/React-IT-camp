import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Edit from './pages/Edit';
import Login from './pages/Login/Login';
import SignUp from './pages/Registration/SignUp';
import AddQuote from './pages/AddQuote/AddQuote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllQuotes />} />
        <Route path='/addnewquote' element={<AddQuote/> } />
        <Route path='/quote/:id' element={<QuoteDetails />} />
        <Route path='/editquote/:id' element={<Edit />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;