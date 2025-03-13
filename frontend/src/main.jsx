import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Plans from './pages/Plans.jsx';
import Credits from './pages/Credits.jsx'
import CreditsInfo from './pages/CreditsInfo.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Plans />
    <Credits/>
    <CreditsInfo/>
  </StrictMode>,
)
