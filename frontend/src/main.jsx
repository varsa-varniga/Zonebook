import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Plans from "./pages/Plans.jsx";
import Credits from "./pages/Credits.jsx";
import CreditsInfo from "./pages/CreditsInfo.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./connections/Login";
import FAQ from "./pages/FAQ.jsx";
import { Signup } from "./components/signup/signup.jsx";
import PasswordSetupScreen from "./pages/setpassword.jsx";
import NameForm from "./pages/name.jsx";
import PhoneNumberForm from "./pages/phonenumber.jsx";
import VerificationCodeForm from "./pages/verificationcode.jsx";
import PaymentForm from "./pages/paymentform.jsx";
import ActivityGenreSelector from "./pages/module40/calculateearnings.jsx";
import ZoneBookSignup2 from "./pages/module40/navigate2.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Navbar/>
    {/* <Plans />
    <Credits/> */}
    {/* <FAQ/> */}
    {/* <CreditsInfo/>
    <Login /> */}
    <App />
    {/* <PasswordSetupScreen /> */}
    {/* <PhoneNumberForm /> */}
    {/* <VerificationCodeForm /> */}

    {/* <Footer/> */}
    {/* <NameForm /> */}
    {/* <PaymentForm /> */}
    {/* <ActivityGenreSelector /> */}
    {/* <ZoneBookSignup2 /> */}
  </StrictMode>
);
