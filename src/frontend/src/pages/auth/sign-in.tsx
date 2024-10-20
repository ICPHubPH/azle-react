import { loginUser } from "@/api/authService"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as z from "zod"

const signInSchema = z.object({
  email: z.string().email(),
})

export default function SignIn({ onSubmit }: { onSubmit: (action: () => Promise<void>) => Promise<void> }) {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  })

  const handleSignIn = async (values: z.infer<typeof signInSchema>) => {
    await onSubmit(async () => {
      try {
        console.log("Sign in", values)
        const result = await loginUser(values)
        console.log(result.message)
        navigate("/otp-verification", {
          state: {
            token: result.token,
            email: result.user.email,
            origin: "login",
          },
        })
      } catch (error) {
        console.error("Sign-in error:", error)
        throw error
      }
    })
  }

  return (
    <Form {...signInForm}>
      <form onSubmit={signInForm.handleSubmit(handleSignIn)} className="space-y-4">
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
        <Button type="submit" className="w-full" disabled={isLoading}>
          Sign In
        </Button>
      </form>
    </Form>
  )
}