import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import { Feedback } from './components/Feedback';
import TShirt from './components/TShirt';

// Lazy load components
const Home = lazy(() => import('./components/Homepage'));
const Workshops = lazy(() => import('./components/Workshops'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF5CBF]"></div>
  </div>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/t-shirt" element={<TShirt />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
