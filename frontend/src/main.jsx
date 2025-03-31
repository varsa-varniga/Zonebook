import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Plans from './pages/Plans.jsx';
import Credits from './pages/Credits.jsx';
import CreditsInfo from './pages/CreditsInfo.jsx';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./connections/Login";
import FAQ from './pages/FAQ.jsx';
import UseCredit from './pages/Usecredit.jsx';
import Browse from './components/Browse.jsx';
import ListBusiness from './components/ListBusiness.jsx';
import Earn from './pages/Earn.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import SubNavbar from './components/SubNavbar.jsx';
import MapSection from './components/Map.jsx';

// Component to handle dynamic SubNavbar display
const Layout = () => {
  const location = useLocation();

  // Define routes where SubNavbar should be shown
  const showSubNavbar = [
    "/list-business",
    "/working",
    "/Browse-integration",
    "/calculate",
    "/resource"
  ].includes(location.pathname);

  return (
    <>
    
      <Navbar />
      {showSubNavbar && <SubNavbar />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/map" element={<MapSection />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/credit" element={<Credits />} />
        <Route path="/use-credit" element={<UseCredit />} />
        <Route path="/yoga-credit" element={<CreditsInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-business" element={<ListBusiness />} />
        
        {/* SubNavbar Routes */}
       
        <Route path="/working" element={<HowItWorks />} />
        <Route path="/Browse-integration" element={<Browse />} />
        <Route path="/calculate" element={<Earn />} />
        <Route path="/resource" element={<Earn />} />
      </Routes>
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Layout />
    </Router>
  </StrictMode>
);
