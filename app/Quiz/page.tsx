"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Users, PlusCircle, BookOpen } from "lucide-react"

export default function QuizLandingPage() {
  const [joinCode, setJoinCode] = useState("")

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Quiz Platform</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Create interactive quizzes or join existing ones with a simple code. Perfect for classrooms, events, or just
          having fun with friends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Join Quiz Card */}
        <Card className="overflow-hidden border-2 transition-all hover:shadow-lg">
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6" />
              Join Quiz
            </CardTitle>
            <CardDescription>Enter a code to join an existing quiz session</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <Label htmlFor="join-code">Quiz Code</Label>
                <Input
                  id="join-code"
                  placeholder="Enter quiz code"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                />
              </div>
              <div className="h-24 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full gap-2" size="lg" disabled={!joinCode}>
              Join Quiz <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Create Quiz Card */}
        <Card className="overflow-hidden border-2 transition-all hover:shadow-lg">
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <PlusCircle className="h-6 w-6" />
              Create Quiz
            </CardTitle>
            <CardDescription>Build your own custom quiz from scratch</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Create a new quiz with custom questions, multiple choice answers, and more. Share the code with
                participants to start.
              </p>
              <div className="h-24 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 w-full max-w-[200px]">
                  <div className="h-12 rounded-md bg-primary/10"></div>
                  <div className="h-12 rounded-md bg-primary/20"></div>
                  <div className="h-12 rounded-md bg-primary/20"></div>
                  <div className="h-12 rounded-md bg-primary/10"></div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full gap-2" size="lg">
              Create New Quiz <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          Need help? Check out our{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            documentation
          </a>{" "}
          or{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            contact support
          </a>
          .
        </p>
      </div>
    </div>
  )
}

