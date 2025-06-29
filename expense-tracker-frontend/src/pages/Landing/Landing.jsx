import { useState } from 'react';
import PublicNavbar from '../../components/PublicNavbar';
import LoginModal from '../Login/Login'; // ← new file

function Landing() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <PublicNavbar onLoginClick={() => setShowLogin(true)} />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      
      {/* 👇 Add your landing page sections here */}
      <div className="landing-content">
        <h1>Welcome to Budgetify app 💸</h1>
        <p>Your smart and personal expense tracker dor life</p>
      </div>
    </>
  );
}

export default Landing;
// This is the landing page component for the expense tracker application.
// It includes the public navigation bar and a login modal.