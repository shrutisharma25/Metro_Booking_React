import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import TicketForm from './Components/TicketForm/TicketForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/MetroBookingApp' element={<TicketForm />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
