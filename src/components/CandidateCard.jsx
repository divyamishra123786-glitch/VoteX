function CandidateCard({
  image,
  name,
  party,
  onVote
}) {
  return (
    <div className="candidate-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{party}</p>

      <button onClick={onVote}>
        Vote Now
      </button>
    </div>
  );
}

export default CandidateCard;