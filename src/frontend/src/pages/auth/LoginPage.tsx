import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'
import { Link } from 'react-router-dom'
import { loginFormSchema} from "@/lib/formSchema"
import { z } from "zod"

const LoginPage = () => {

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
          email: "",
          password : ""
        },
      })

      function onSubmit(values: z.infer<typeof loginFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 relative">
        {/* Background Image Section */}
        <section className="hidden md:block size-full relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-[url('women.png')]"
                style={{ backgroundPositionX: "60%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
            <p className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 w-2/4 lg:w-3/5 xl:w-2/5 text-white font-bold md:text-4xl lg:text-5xl text-right">
                Start growing your urban garden today.
            </p>
        </section>

        {/* Login Section */}
        <section className="w-full flex flex-col items-center md:block p-6 md:p-12 overflow-y-scroll">
            <div className="w-full text-center md:text-left xl:w-2/3">
                <h1 className="font-light text-2xl lg:text-3xl">
                    Website <span className="text-primary">Name</span>
                </h1>
                <h1 className="mt-4 leading-normal lg:leading-relaxed text-3xl md:text-4xl lg:text-5xl text-primary">
                    Welcome back to your
                    Urban Garden.
                </h1>
                <p className="mt-1 text-gray-500 text-sm md:text-base">
                    Sign in to __ and join our amazing community
                </p>
            </div>

        <div className="mt-14 w-full space-y-4 ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} 
                        className="space-y-3 ">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem className="space-y-2" >
                            <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                            <FormItem className="space-y-2" >
                            <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                </form>
            </Form>
                
            <div className="text-center">
                <span>Don't have an account?</span>{" "}
                <Link to={"/signup"} className="text-primary hover:underline">
                    Sign Up
                </Link>
            </div>
            <div className="m-0 relative w-full flex justify-center">
                <p className="w-fit text-sm text-center bg-white px-2 text-gray-500 z-10">
                    OR
                </p>
                <hr className="absolute top-1/2 w-full h-0.5 bg-gray-300" />
            </div>
        </div>
        </section>
    </div>
  )
}

export default LoginPage