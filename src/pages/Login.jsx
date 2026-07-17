import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/users/login",
        {
          email,
          password,
        }
      );

      const loggedInUser = response.data.user;

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", loggedInUser._id);
      localStorage.setItem("userName", loggedInUser.name);

      localStorage.setItem(
        "hasVoted",
        loggedInUser.hasVoted ? "true" : "false"
      );

      alert("Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;