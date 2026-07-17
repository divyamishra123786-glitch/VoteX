import { Link } from "react-router-dom";

function Dashboard() {
  const hasVoted =
    localStorage.getItem("hasVoted") === "true";

  const userId =
    localStorage.getItem("userId");

  return (
    <div className="dashboard">

      <h1>Welcome to VoteX Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>👤 User Status</h2>
          <p>
            {userId
              ? "Logged In Successfully"
              : "Guest User"}
          </p>
        </div>

        <div className="dashboard-card">
          <h2>🗳 Voting Status</h2>
          <p>
            {hasVoted
              ? "You have already voted."
              : "You have not voted yet."}
          </p>
        </div>

        <div className="dashboard-card">
          <h2>📊 Election Info</h2>
          <p>
            4 Candidates Available
          </p>
        </div>

        <div className="dashboard-card">
          <h2>🏆 Current Leader</h2>
          <p>
            Rahul Sharma
          </p>
        </div>

      </div>

      <div className="dashboard-actions">
        <Link to="/vote">
          <button>Go To Vote</button>
        </Link>

        <Link to="/result">
          <button>View Results</button>
        </Link>
      </div>

    </div>
  );
}

export default Dashboard;