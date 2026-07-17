import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CandidateDetails() {
  const { id } = useParams();

  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/api/candidates/${id}`
      );

      setCandidate(res.data.candidate);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="details-page">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!candidate) {
    return (
      <div className="details-page">
        <h1>Candidate Not Found</h1>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-card">

        <img
          src={`http://127.0.0.1:5000${candidate.image}`}
          alt={candidate.name}
          className="details-image"
        />

        <h1>{candidate.name}</h1>

        <div className="details-info">
          <p><strong>Party:</strong> {candidate.party}</p>
          <p><strong>Age:</strong> {candidate.age}</p>
          <p><strong>Education:</strong> {candidate.education}</p>
          <p><strong>Experience:</strong> {candidate.experience}</p>
          <p><strong>Manifesto:</strong> {candidate.manifesto}</p>
          <p><strong>Total Votes:</strong> {candidate.votes}</p>
        </div>

        <Link to="/vote" className="back-btn">
          ← Back to Voting
        </Link>

      </div>
    </div>
  );
}

export default CandidateDetails;