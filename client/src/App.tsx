import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/Navbar';
import { Inquiries } from './components/Inquiries';

// Lazy load components
const Home = lazy(() => import('./components/Homepage'));
const Workshops = lazy(() => import('./components/Workshops'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-[#EDE8F5]">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/inquiries" element={<Inquiries />} />
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
