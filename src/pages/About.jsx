function About() {
  return (
    <div className="about-container">
      <h1>About VoteX</h1>

      <p>
        VoteX is a secure and transparent online voting platform
        designed to make elections simple, fast, and reliable.
      </p>

      <div className="about-features">
        <div className="feature-card">
          <h3>🔒 Secure Voting</h3>
          <p>Your vote is protected and counted safely.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Results</h3>
          <p>View election results instantly.</p>
        </div>

        <div className="feature-card">
          <h3>🌍 Accessible Anywhere</h3>
          <p>Vote from any location with internet access.</p>
        </div>
      </div>
    </div>
  );
}

export default About;