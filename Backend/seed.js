const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Candidate = require("./models/Candidate");

dotenv.config();

const candidates = [
  {
    name: "Rahul Sharma",
    party: "Democratic Party",
    age: 35,
    education: "MBA",
    experience: "10 Years",
    manifesto: "Education, Healthcare and Employment",
    image: "/images/rahul.jpg",
  },

  {
    name: "Priya Verma",
    party: "Progressive Party",
    age: 32,
    education: "B.Tech",
    experience: "8 Years",
    manifesto: "Women Safety and Digital India",
    image: "/images/priya.jpg",
  },

  {
    name: "Aman Singh",
    party: "National Party",
    age: 38,
    education: "M.Tech",
    experience: "12 Years",
    manifesto: "Roads, Jobs and Agriculture",
    image: "/images/aman.jpg",
  },

  {
    name: "Neha Patel",
    party: "People's Party",
    age: 30,
    education: "LLB",
    experience: "6 Years",
    manifesto: "Youth Development and Education",
    image: "/images/neha.jpg",
  },
];

const seedCandidates = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Mongo Connected");

    await Candidate.deleteMany();

    await Candidate.insertMany(candidates);

    console.log("Candidates Added");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedCandidates();