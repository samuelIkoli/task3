import './App.css';
import Home from './Home';
import Place from './Place';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
