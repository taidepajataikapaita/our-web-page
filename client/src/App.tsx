import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Inquiries } from './components/Inquiries';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/workshops" element={<div>Workshops Page</div>} />
        <Route path="/inquiries" element={<Inquiries />} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
