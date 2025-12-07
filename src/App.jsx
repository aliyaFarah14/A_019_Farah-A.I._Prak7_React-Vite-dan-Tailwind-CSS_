import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
import Schedule from './components/Schedule';
import Activities from './components/Activities';
import ProjectShowcase from './components/ProjectShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <Pillars />
        <Schedule />
        <Activities />
        <ProjectShowcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;  