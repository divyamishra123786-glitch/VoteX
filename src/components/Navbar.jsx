import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("hasVoted");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">VoteX</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/vote">Vote</Link>
        <Link to="/result">Results</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-login">
              Login
            </Link>

            <Link to="/register" className="nav-register">
              Register
            </Link>
          </>
        ) : (
          <div className="nav-user">
            <span className="nav-username">
              👋 {userName || "Voter"}
            </span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;