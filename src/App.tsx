import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PulsatingBackground from './components/ui/PulsatingBackground';
import InteractiveCursor from './components/ui/InteractiveCursor';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <PulsatingBackground />
        <InteractiveCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}