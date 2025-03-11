import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Inquiries } from './components/Inquiries';
import Workshops from './components/Workshops';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#EDE8F5]">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/inquiries" element={<Inquiries />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
