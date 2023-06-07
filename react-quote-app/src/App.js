import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AllQuotes/>} />
        <Route path='/quote/:id' element={<QuoteDetails />} />
        <Route path='/editquote/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;