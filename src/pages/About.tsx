import React from 'react';
import TeamGrid from '../components/about/TeamGrid';
import Scene from '../components/3d/Scene';

export default function About() {
  return (
    <div className="relative min-h-screen bg-black">
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF0000]/10 via-black to-black" />
      
      <div className="relative pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
              <span className="text-white">Meet Our </span>
              <span className="gradient-text">Innovative</span>
              <span className="text-white"> Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              A diverse group of creative minds and technical experts dedicated to transforming your digital presence
            </p>
          </div>
          
          <TeamGrid />
        </div>
      </div>
    </div>
  );
}