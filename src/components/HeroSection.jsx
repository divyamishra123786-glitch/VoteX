import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="badge">
          🔒 Secure • Transparent • Reliable
        </div>

        <h1>
          Future of
          <br />
          <span>Online Voting</span>
        </h1>

        <p>
          Experience a secure, transparent and lightning-fast
          digital election platform designed for modern democracy.
        </p>

        <div className="hero-features">
          <span>🛡 Secure Authentication</span>
          <span>⚡ Real-Time Results</span>
          <span>🌍 Global Access</span>
        </div>

        <div className="hero-buttons">

          <Link
            to="/login"
            className="login-btn-home"
          >
            Login to Vote
          </Link>

          <Link
            to="/register"
            className="register-btn-home"
          >
            Create Account
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="vote-card">

          <div className="vote-icon">
            🗳️
          </div>

          <h2>Online Voting</h2>

          <p>
            Secure Digital Election Platform
          </p>

          <div className="card-stats">

            <div>
              <h3>10K+</h3>
              <span>Voters</span>
            </div>

            <div>
              <h3>99.9%</h3>
              <span>Uptime</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;