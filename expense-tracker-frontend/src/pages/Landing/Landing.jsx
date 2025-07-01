import PublicNavbar from '../../components/PublicNavbar';
import './Landing.css';

function Landing() {
  return (
    <>
      <PublicNavbar />
      <div className="landing-hero">
        <div className="hero-content">
          <h1>Welcome to Budgetify 💸</h1>
          <p>Save more, spend less. Your intelligent budgeting assistant starts here.</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
