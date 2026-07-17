const express = require("express");

const {
  getCandidates,
  getCandidateById,
  voteCandidate,
  getResults,
} = require("../controllers/candidateController");

const router = express.Router();

// Get all candidates
router.get("/", getCandidates);

// Election results
router.get("/results", getResults);

// Get single candidate
router.get("/:id", getCandidateById);

// Vote
router.post("/vote", voteCandidate);

module.exports = router;