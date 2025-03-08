
"use client"
import Link from "next/link";
import React from "react";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Organic shape decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#4CAF50" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.8,-0.1C89.6,16,86.7,32.1,78.7,45.3C70.7,58.5,57.7,68.9,43.2,75.2C28.7,81.6,12.9,83.9,-2,83.7C-16.8,83.5,-33.6,80.7,-47.2,73.2C-60.8,65.6,-71.2,53.2,-77.2,39.2C-83.1,25.1,-84.6,9.4,-83.3,-6.1C-81.9,-21.5,-77.7,-37,-69.2,-49.7C-60.8,-62.4,-48.1,-72.4,-34.3,-79.5C-20.6,-86.7,-5.9,-91.1,7.7,-88.1C21.2,-85.1,30.6,-83.7,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#8BC34A" d="M39.9,-68.1C52.9,-62.1,65.5,-53.8,73.9,-42C82.4,-30.2,86.6,-15.1,86.8,0.1C87,15.3,83.1,30.5,75.1,43.1C67,55.7,54.7,65.6,41.1,72.4C27.5,79.2,12.7,82.8,-1.7,85.4C-16.2,88,-32.4,89.7,-45.4,84C-58.5,78.3,-68.3,65.4,-75.4,51.1C-82.4,36.9,-86.7,21.2,-87.8,5.1C-89,-10.9,-87.1,-27.2,-79.6,-40.1C-72.1,-53,-59,-62.6,-45,-67.4C-31,-72.3,-15.5,-72.5,-0.8,-71.2C13.9,-69.9,27.8,-67.1,39.9,-68.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Hero Section */}
      <header className="relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
            Learn Sustainably with EcoLearn
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            An AI-powered EdTech platform that creates personalized study plans while tracking and rewarding eco-friendly learning habits.
          </p>

          <Link href="/Quiz">
            Start Quiz
          </Link>
        </div>
      </header>

      {/* Features */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-emerald-900/30 transition-shadow border border-gray-700">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-300">Personalized Study Plans</h3>
              <p className="text-gray-400">AI-generated study plans based on your quiz results to optimize your learning journey.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-emerald-900/30 transition-shadow border border-gray-700">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-300">Real-Time Analytics</h3>
              <p className="text-gray-400">Get instant insights on your quiz performance with detailed analysis and improvement suggestions.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-emerald-900/30 transition-shadow border border-gray-700">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-300">Sustainability Rewards</h3>
              <p className="text-gray-400">Earn rewards and climb the leaderboard by adopting eco-friendly study habits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Study Sustainably?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join EcoLearn today and transform your learning experience while making a positive impact on the environment.
          </p>

            <Link href="/Quiz">
            Start Quiz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-gray-800/50 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} EcoLearn. All rights reserved.</p>
          <p className="mt-2 text-sm">Making education sustainable, one study session at a time.</p>
        </div>
      </footer>
    </div>
  );
}