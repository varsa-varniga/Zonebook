import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Plans from './pages/Plans.jsx';
import Credits from './pages/Credits.jsx'
import CreditsInfo from './pages/CreditsInfo.jsx';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./connections/Login";
import FAQ from './pages/FAQ.jsx';
import UseCredit from './pages/Usecredit.jsx';
import Revenue from "./pages/Revenue.jsx";
import ZoneBookPage from './pages/ZoneBookPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Plans />
    <Credits/>
    
    <CreditsInfo/>
    <Login />
    <FAQ/>
    <UseCredit/>
    <Footer/>
     <Revenue/>
    <ZoneBookPage/>
  </StrictMode>,
)
