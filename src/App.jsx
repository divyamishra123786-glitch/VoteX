import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CandidateDetails from "./pages/CandidateDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route path="/vote" element={<Vote />} />
  <Route path="/candidate/:id" element={<CandidateDetails />} />
  <Route path="/result" element={<Result />} />

  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;