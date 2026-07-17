import { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const COLORS = ["#6C63FF", "#FF63C4", "#63C4FF", "#FFC163"];

function Result() {
  const [results, setResults] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/candidates/results"
      );

      // backend sends { success, totalVotes, winner, results: [...] }
      setResults(response.data.results || []);
      setTotalVotes(response.data.totalVotes || 0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();

    const interval = setInterval(() => {
      fetchResults();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const winner = results.length > 0 ? results[0] : null;

  if (loading) {
    return (
      <div className="result-page">
        <h1>Election Results</h1>
        <p>Loading results...</p>
      </div>
    );
  }

  return (
    <div className="result-page">

      <h1>Election Results</h1>

      <p style={{ opacity: 0.8, marginTop: "-10px" }}>
        Total Votes Cast: <strong>{totalVotes}</strong>
      </p>

      {winner && winner.votes > 0 && (
        <div className="winner-card">

          <h2>🏆 Leading Candidate</h2>

          <h1>{winner.name}</h1>

          <p>
            Party : <strong>{winner.party}</strong>
          </p>

          <p>
            Total Votes : <strong>{winner.votes}</strong> (
            {winner.percentage}%)
          </p>

        </div>
      )}

      <div className="result-chart">

        <ResponsiveContainer width="100%" height={400}>

          <BarChart data={results}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar dataKey="votes" radius={[10, 10, 0, 0]}>
              {results.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="result-list">

        {results.map((candidate, index) => (

          <div
            className="candidate-result-card"
            key={candidate._id}
          >

            <h2>
              #{index + 1} {candidate.name}
            </h2>

            <p>
              <strong>Party :</strong> {candidate.party}
            </p>

            <p>
              <strong>Votes :</strong> {candidate.votes} (
              {candidate.percentage}%)
            </p>
            <div className="progress-track">
  <div
    className="progress-fill"
    style={{ width: `${candidate.percentage}%` }}
  ></div>
</div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Result;