"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  BarChart3,
  Trophy,
  BookOpen,
  FolderKanban,
  UserCircle2,
  GraduationCap
} from "lucide-react";
import NavbarMain from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn(
    "flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden relative",
    className
  )}>
    <div className="absolute inset-0 bg-grid-white/[0.2] [mask-image:linear-gradient(0deg,transparent,black)]" />
  </div>
);

const items = [
  {
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and milestone tracking.",
    header: <Skeleton className="bg-[#ff8c42]/10" />,
    icon: <BarChart3 className="h-5 w-5 text-[#ff8c42]" />,
    link: "/Track-Progress",
    className: "md:col-span-2"
  },
  {
    title: "Leaderboard",
    description: "Compare your performance and celebrate achievements with fellow learners.",
    header: <Skeleton className="bg-[#4ecdc4]/10" />,
    icon: <Trophy className="h-5 w-5 text-[#4ecdc4]" />,
    link: "/Leaderboard"
  },
  {
    title: "Practice Quizzes",
    description: "Test your knowledge with interactive quizzes and get instant feedback.",
    header: <Skeleton className="bg-[#ff6b6b]/10" />,
    icon: <BookOpen className="h-5 w-5 text-[#ff6b6b]" />,
    link: "/Quiz"
  },
  {
    title: "Learning Resources",
    description: "Access your personalized collection of study materials and references.",
    header: <Skeleton className="bg-[#45b7d1]/10" />,
    icon: <FolderKanban className="h-5 w-5 text-[#45b7d1]" />,
    link: "/My-Resources",
    className: "md:col-span-2"
  },
  {
    title: "Profile Settings",
    description: "Customize your learning experience and manage account preferences.",
    header: <Skeleton className="bg-[#96ceb4]/10" />,
    icon: <UserCircle2 className="h-5 w-5 text-[#96ceb4]" />,
    link: "/Profile"
  }
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.4 }
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <NavbarMain />
      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Learning Dashboard
            </h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Welcome back! Track your progress, access resources, and continue your learning journey.
          </p>
        </motion.div>

        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <Link href={item.link} key={i} className="outline-none">
              <motion.div
                initial="initial"
                whileHover="animate"
                variants={{
                  animate: { scale: 1.02 }
                }}
                transition={{ duration: 0.2 }}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={cn(
                    "group transition-all duration-200 hover:border-primary/50",
                    item.className
                  )}
                />
              </motion.div>
            </Link>
          ))}
        </BentoGrid>
      </main>
    </div>
  );
}