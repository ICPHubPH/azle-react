"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useNavigate } from "react-router-dom" // Import useNavigate for redirection
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Define the validation schema using Zod
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate() // Initialize navigate function for redirection

  // Initialize the form with react-hook-form and Zod for validation
  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema), // Use Zod resolver for validation
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Handle sign-in form submission
  const onSignIn = async (values: z.infer<typeof signInSchema>) => {
    setIsLoading(true) // Set loading state to true during the sign-in process

    // Simulate sign-in process for development purposes
    // TODO: Replace with actual sign-in logic in production
    console.log("Sign in", values)

    // For now, navigate the user to the home page after sign-in
    navigate("/home")

    setIsLoading(false) // Set loading state to false after sign-in
  }

  return (
    <Form {...signInForm}>
      <form onSubmit={signInForm.handleSubmit(onSignIn)} className="space-y-4">
        {/* Email Field */}
        <FormField
          control={signInForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={signInForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </Form>
  )
}
