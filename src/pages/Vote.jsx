import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import rahul from "../assets/candidates/rahul.jpg";
import priya from "../assets/candidates/priya.jpg";
import aman from "../assets/candidates/aman.jpg";
import neha from "../assets/candidates/neha.jpg";

const candidateImages = {
  "Rahul Sharma": rahul,
  "Priya Verma": priya,
  "Aman Singh": aman,
  "Neha Patel": neha,
};

function Vote() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const [hasVoted, setHasVoted] = useState(
    localStorage.getItem("hasVoted") === "true"
  );

  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get(
        "https://votex-backend-qep1.onrender.com/api/candidates"
      );

      setCandidates(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const handleVote = async (candidateId, candidateName) => {
    if (hasVoted) {
      alert("You have already voted.");
      return;
    }

    const userId = localStorage.getItem("userId");

    try {
      await axios.post(
        "https://votex-backend-qep1.onrender.com/api/candidates/vote",
        {
          userId,
          candidateId,
        }
      );

      localStorage.setItem("hasVoted", "true");
      setHasVoted(true);

      alert(`Vote submitted for ${candidateName}`);

      navigate("/result");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  if (loading) {
    return (
      <div className="vote-page">
        <h1>Loading Candidates...</h1>
      </div>
    );
  }

  return (
    <div className="vote-page">

      <h1>Choose Your Candidate</h1>

      <div className="candidate-grid">

        {candidates.map((candidate) => (

          <div className="candidate-card" key={candidate._id}>

            <img
              src={candidateImages[candidate.name]}
              alt={candidate.name}
              className="candidate-image"
            />

            <h2>{candidate.name}</h2>

            <p><strong>Party:</strong> {candidate.party}</p>

            <p><strong>Age:</strong> {candidate.age} Years</p>

            <p><strong>Education:</strong> {candidate.education}</p>

            <p><strong>Experience:</strong> {candidate.experience}</p>

            <p className="manifesto">
              {candidate.manifesto}
            </p>

            <div className="candidate-buttons">

              <button
                className="details-btn"
                onClick={() =>
                  navigate(`/candidate/${candidate._id}`)
                }
              >
                View Details
              </button>

              <button
                className="vote-btn"
                disabled={hasVoted}
                onClick={() =>
                  handleVote(candidate._id, candidate.name)
                }
              >
                {hasVoted ? "Already Voted" : "Vote Now"}
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Vote;