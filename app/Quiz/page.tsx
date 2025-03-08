"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Users, PlusCircle, BookOpen, Moon, Sun } from "lucide-react"

export default function QuizLandingPage() {
  const [joinCode, setJoinCode] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  // Color schemes for light and dark mode
  const colors = {
    light: {
      background: "#FFFFFF",
      cardBackground: "#FFFFFF",
      cardHeaderBg: "rgba(79, 70, 229, 0.05)",
      text: "#111827",
      mutedText: "#6B7280",
      border: "#E5E7EB",
      primary: "#4F46E5",
      primaryHover: "#4338CA",
      inputBg: "#FFFFFF",
      inputBorder: "#D1D5DB",
      iconMuted: "rgba(107, 114, 128, 0.5)",
      accentLight: "rgba(79, 70, 229, 0.1)",
      accentMedium: "rgba(79, 70, 229, 0.2)",
    },
    dark: {
      background: "#111827",
      cardBackground: "#1F2937",
      cardHeaderBg: "rgba(79, 70, 229, 0.1)",
      text: "#F9FAFB",
      mutedText: "#9CA3AF",
      border: "#374151",
      primary: "#6366F1",
      primaryHover: "#4F46E5",
      inputBg: "#374151",
      inputBorder: "#4B5563",
      iconMuted: "rgba(156, 163, 175, 0.5)",
      accentLight: "rgba(99, 102, 241, 0.1)",
      accentMedium: "rgba(99, 102, 241, 0.2)",
    },
  }

  // Get current color scheme based on mode
  const c = darkMode ? colors.dark : colors.light

  return (
    <div
      style={{
        backgroundColor: c.background,
        color: c.text,
        minHeight: "100vh",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              backgroundColor: "transparent",
              color: c.text,
              border: `1px solid ${c.border}`,
              borderRadius: "9999px",
              width: "40px",
              height: "40px",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4" style={{ color: c.text }}>
            Quiz Platform
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: c.mutedText }}>
            Create interactive quizzes or join existing ones with a simple code. Perfect for classrooms, events, or just
            having fun with friends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Join Quiz Card */}
          <Card
            className="overflow-hidden transition-all hover:shadow-lg"
            style={{
              borderColor: c.border,
              backgroundColor: c.cardBackground,
              borderWidth: "2px",
              boxShadow: darkMode ? "0 10px 15px -3px rgba(0, 0, 0, 0.3)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardHeader className="pb-4" style={{ backgroundColor: c.cardHeaderBg }}>
              <CardTitle className="flex items-center gap-2 text-2xl" style={{ color: c.text }}>
                <Users className="h-6 w-6" style={{ color: c.primary }} />
                Join Quiz
              </CardTitle>
              <CardDescription style={{ color: c.mutedText }}>
                Enter a code to join an existing quiz session
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="join-code" style={{ color: c.text }}>
                    Quiz Code
                  </Label>
                  <Input
                    id="join-code"
                    placeholder="Enter quiz code"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    style={{
                      borderColor: c.inputBorder,
                      backgroundColor: c.inputBg,
                      color: c.text,
                    }}
                  />
                </div>
                <div className="h-24 flex items-center justify-center">
                  <BookOpen className="h-16 w-16" style={{ color: c.iconMuted }} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full gap-2"
                size="lg"
                disabled={!joinCode}
                style={{
                  backgroundColor: joinCode ? c.primary : c.mutedText,
                  color: "#FFFFFF",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  borderRadius: "0.375rem",
                  cursor: joinCode ? "pointer" : "not-allowed",
                  opacity: joinCode ? "1" : "0.7",
                }}
              >
                Join Quiz <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Create Quiz Card */}
          <Card
            className="overflow-hidden transition-all hover:shadow-lg"
            style={{
              borderColor: c.border,
              backgroundColor: c.cardBackground,
              borderWidth: "2px",
              boxShadow: darkMode ? "0 10px 15px -3px rgba(0, 0, 0, 0.3)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardHeader className="pb-4" style={{ backgroundColor: c.cardHeaderBg }}>
              <CardTitle className="flex items-center gap-2 text-2xl" style={{ color: c.text }}>
                <PlusCircle className="h-6 w-6" style={{ color: c.primary }} />
                Create Quiz
              </CardTitle>
              <CardDescription style={{ color: c.mutedText }}>Build your own custom quiz from scratch</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p style={{ color: c.mutedText }}>
                  Create a new quiz with custom questions, multiple choice answers, and more. Share the code with
                  participants to start.
                </p>
                <div className="h-24 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 w-full max-w-[200px]">
                    <div className="h-12 rounded-md" style={{ backgroundColor: c.accentLight }}></div>
                    <div className="h-12 rounded-md" style={{ backgroundColor: c.accentMedium }}></div>
                    <div className="h-12 rounded-md" style={{ backgroundColor: c.accentMedium }}></div>
                    <div className="h-12 rounded-md" style={{ backgroundColor: c.accentLight }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full gap-2"
                size="lg"
                style={{
                  backgroundColor: c.primary,
                  color: "#FFFFFF",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  borderRadius: "0.375rem",
                }}
              >
                Create New Quiz <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm" style={{ color: c.mutedText }}>
          <p>
            Need help? Check out our{" "}
            <a
              href="#"
              className="underline underline-offset-4"
              style={{ color: c.mutedText, transition: "color 0.2s ease" }}
            >
              documentation
            </a>{" "}
            or
            <a
              href="#"
              className="underline underline-offset-4 ml-1"
              style={{ color: c.mutedText, transition: "color 0.2s ease" }}
            >
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

