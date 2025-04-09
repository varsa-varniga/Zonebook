import Navbar from "./components/Navbar.jsx";
import { Signup } from "./components/signup/signup.jsx";
import TrialComponent from "./components/fitnesstrail/fitnesstrail.jsx";
import PasswordSetupScreen from "./pages/setpassword.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NameForm from "./pages/name.jsx";
import PhoneNumberForm from "./pages/phonenumber.jsx";
import VerificationCodeForm from "./pages/verificationcode.jsx";
import PaymentForm from "./pages/paymentform.jsx";
import Signupfree from "./pages/module40/navigate1.jsx";
import ZoneBookSetupWizard from "./pages/module40/calculateearnings.jsx";
import ZoneBookSignup2 from "./pages/module40/navigate2.jsx";
import Thank from "./pages/module40/navigate3.jsx";
import NavBar from "./pages/secondnavbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrialComponent />} />
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
          <Route path="/secondnavbar" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
