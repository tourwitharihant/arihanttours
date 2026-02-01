import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Videos from './pages/Videos';
import FlightEnquiry from './pages/FlightEnquiry';
import HotelEnquiry from './pages/HotelEnquiry';
import CruiseEnquiry from './pages/CruiseEnquiry';
import Packages from './pages/Packages';
import VillaEnquiry from './pages/VillaEnquiry';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'videos':
        return <Videos />;
      case 'flight-enquiry':
        return <FlightEnquiry />;
      case 'hotel-enquiry':
        return <HotelEnquiry />;
      case 'cruise-enquiry':
        return <CruiseEnquiry />;
      case 'villa-enquiry':
        return <VillaEnquiry />;
      case 'about':
        return <About />;
      case 'packages':
        return <Packages />;
      case 'contact':
        return <Contact />;
      case 'terms':
      return <Terms />;
      case 'privacy':
      return <Privacy />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      {/* ✅ Pass navigation function to Footer */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
