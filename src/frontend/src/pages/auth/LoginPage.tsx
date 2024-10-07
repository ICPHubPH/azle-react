import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
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

        {/* <Form {...form}>

         </Form> */}
        <div className="mt-14 w-full space-y-4 ">
            {/* TODO: Turn this into a form component */}
            <div className="space-y-3">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput id="password" />
                </div>

                <Button type="submit" className="w-full">
                    Login
                </Button>
            </div>
            
            <div className="text-center">
                <span>Don't have an account?</span>{" "}
                <Link to={"/login"} className="text-primary hover:underline">
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