"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SignIn from "./sign-in"
import SignUp from "./sign-up"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin")

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent">
              ConnectED
            </h1>
          </div>
          <CardTitle className="text-2xl font-semibold text-center">
            {activeTab === "signin" ? "Welcome back" : "Create an account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignIn />
            </TabsContent>
            <TabsContent value="signup">
              <SignUp />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            {activeTab === "signin" ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className="p-0 h-auto font-normal"
              onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
            >
              {activeTab === "signin" ? "Sign up" : "Sign in"}
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
