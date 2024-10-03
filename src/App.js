// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Background from './components/Background';
import Projects from './components/Projects';
import About from './components/About';


const HomePage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const ProjectPage = () => {
  return (
    <Projects />
  );
};

const AboutPage = () => {
  return (
    <About />
  );
};

const App = () => {
  return (
    <Router>
      <Header /> {/* Include your header if needed */}
      <Background /> {/* Include your background component if needed */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} /> {/* Correct path to /projects */}
        <Route path="/about" element={<AboutPage />} /> {/* Correct path to /about */}
      </Routes>
    </Router>
  );
};

export default App;
