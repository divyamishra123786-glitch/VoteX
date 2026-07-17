const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    party: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    education: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    manifesto: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    votes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Candidate", candidateSchema);