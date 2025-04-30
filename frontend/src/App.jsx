import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { Signup } from "./components/signup/signup.jsx";
import TrialComponent from "./components/fitnesstrail/fitnesstrail.jsx";
import PasswordSetupScreen from "./pages/setpassword.jsx";
import NameForm from "./pages/name.jsx";
import PhoneNumberForm from "./pages/phonenumber.jsx";
import VerificationCodeForm from "./pages/verificationcode.jsx";
import PaymentForm from "./pages/paymentform.jsx";
import Signupfree from "./pages/module40/navigate1.jsx";
import ZoneBookSetupWizard from "./pages/module40/calculateearnings.jsx";
import ZoneBookSignup2 from "./pages/module40/navigate2.jsx";
import Thank from "./pages/module40/navigate3.jsx";
import SecondNavBar from "./pages/secondnavbar.jsx";

import Footer from "./components/Footer.jsx";
import SubNavbar from "./components/SubNavbar.jsx";

import HeroPage from "./pages/Heropage.jsx";
import FAQ from "./pages/FAQ.jsx";
import Plans from "./pages/Plans.jsx";
import Credits from "./pages/Credits.jsx";
import CreditsInfo from "./pages/CreditsInfo.jsx";
import Login from "./connections/Login";
import UseCredit from "./pages/Usecredit.jsx";
import Browse from "./components/Browse.jsx";
import ListBusiness from "./components/ListBusiness.jsx";
import Earn from "./pages/Earn.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import MapSection from "./components/Map.jsx";

function App() {
  const location = useLocation();

  const showSubNavbar = [
    "/list-business",
    "/working",
    "/Browse-integration",
    "/calculate",
    "/resource",
  ].includes(location.pathname);

  return (
    <>
      <Navbar />
      {showSubNavbar && <SubNavbar />}

      <Routes>
        <Route index element={<HeroPage />} />
        <Route path="/" element={<HeroPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/map" element={<MapSection />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/credit" element={<Credits />} />
        <Route path="/use-credit" element={<UseCredit />} />
        <Route path="/yoga-credit" element={<CreditsInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-business" element={<ListBusiness />} />
        <Route path="/working" element={<HowItWorks />} />
        <Route path="/Browse-integration" element={<Browse />} />
        <Route path="/calculate" element={<Earn />} />
        <Route path="/resource" element={<Earn />} />
        <Route path="/trialcomponent" element={<TrialComponent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/setup-password" element={<PasswordSetupScreen />} />
        <Route path="/setname" element={<NameForm />} />
        <Route path="/setnumber" element={<PhoneNumberForm />} />
        <Route path="/setotp" element={<VerificationCodeForm />} />
        <Route path="/setpayment" element={<PaymentForm />} />
        <Route path="/additionalearning" element={<Signupfree />} />
        <Route path="/zonebook" element={<ZoneBookSetupWizard />} />
        <Route path="/setappointment" element={<ZoneBookSignup2 />} />
        <Route path="/finalthank" element={<Thank />} />
        <Route path="/secondnavbar" element={<SecondNavBar />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
