const Candidate = require("../models/Candidate");
const User = require("../models/User");

// ===============================
// Get All Candidates
// ===============================
const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({ name: 1 });

    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ===============================
// Get Single Candidate
// ===============================
const getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found.",
      });
    }

    res.status(200).json({
      success: true,
      candidate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ===============================
// Vote Candidate
// ===============================
const voteCandidate = async (req, res) => {
  try {
    const { userId, candidateId } = req.body;

    if (!userId || !candidateId) {
      return res.status(400).json({
        success: false,
        message: "User ID and Candidate ID are required.",
      });
    }

    // Find User
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Check if already voted
    if (user.hasVoted) {
      return res.status(400).json({
        success: false,
        message: "You have already voted.",
      });
    }

    // Find Candidate
    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found.",
      });
    }

    // Increase Vote
    candidate.votes += 1;
    await candidate.save();

    // Update User
    user.hasVoted = true;
    user.votedCandidate = candidate._id;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Vote Cast Successfully",
      candidate: {
        id: candidate._id,
        name: candidate.name,
        party: candidate.party,
        totalVotes: candidate.votes,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Election Results
// ===============================
const getResults = async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({ votes: -1 });

    const totalVotes = candidates.reduce(
      (sum, candidate) => sum + candidate.votes,
      0
    );

    const results = candidates.map((candidate) => ({
      _id: candidate._id,
      name: candidate.name,
      party: candidate.party,
      image: candidate.image,
      votes: candidate.votes,
      percentage:
        totalVotes === 0
          ? 0
          : ((candidate.votes / totalVotes) * 100).toFixed(2),
    }));

    res.status(200).json({
      success: true,
      totalCandidates: candidates.length,
      totalVotes,
      winner: results.length > 0 ? results[0] : null,
      results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getCandidates,
  getCandidateById,
  voteCandidate,
  getResults,
};