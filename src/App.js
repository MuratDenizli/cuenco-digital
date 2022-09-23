import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/loading/loading';
import Detailpage from './pages/detailpage';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detailpage/:id" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
