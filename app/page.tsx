"use client";
import { AcmeLogo } from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Code2, Rocket } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BackgroundBeamsDemo() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to your unique needs and pace"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Interactive Tutorials",
      description: "Hands-on exercises and real-world projects to reinforce learning"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Extensive Library",
      description: "Access to a vast collection of educational resources and materials"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed analytics and insights"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      <nav className="border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-xl fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <AcmeLogo />
              <Link className="font-bold text-white ml-2 text-xl" href="/">
                SpyderWeb
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-neutral-200">
                  Login
                </Button>
              </Link>
              <Link href="/Dashboard">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-screen w-full relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-3xl mx-auto p-4 relative z-10">
          <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center font-sans font-bold mb-8">
            Learn Smarter,{" "}
            <span className="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text">
              Grow Faster
            </span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto my-6 text-lg md:text-xl text-center relative z-10 leading-relaxed">
            SpyderWeb adapts to your learning style, providing personalized educational experiences. 
            Upload your resources, and let our AI create the perfect learning journey for you.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/Dashboard">
              <Button size="lg" className="text-lg">
                Start Learning
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <BackgroundBeams />
      </div>

      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-200 mb-12">
            Why Choose SpyderWeb?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-neutral-900/50 border-neutral-800 p-6">
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-200 mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of learners who have already discovered the power of 
            personalized education with SpyderWeb.
          </p>
          <Link href="/Dashboard">
            <Button size="lg" className="text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}