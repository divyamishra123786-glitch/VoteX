function FeaturesSection() {
  return (
    <section className="features-section">

      <h2>Why Choose VoteX?</h2>

      <div className="features-grid">

        <div className="feature-card">
          <div className="feature-icon">🔐</div>
          <h3>Secure Voting</h3>
          <p>
            Advanced encryption protects every vote.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast Results</h3>
          <p>
            Real-time vote counting and instant updates.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>Anywhere Access</h3>
          <p>
            Vote securely from any location.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Transparency</h3>
          <p>
            Fair and transparent election process.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;