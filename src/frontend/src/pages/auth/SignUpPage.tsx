import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/password-input";
import { Link } from "react-router-dom";
import SocialsAuth from "@/components/SocialsAuth";
import { cn } from "@/lib/utils";

const SignUpPage = () => {
	return (
		<div className="h-screen grid grid-cols-1 md:grid-cols-2 relative">
			{/* Sign In Section */}
			<section className="w-full flex flex-col items-center md:block p-6 md:p-12 overflow-y-scroll">
				<div className="w-full text-center md:text-left xl:w-2/3">
					<img className="h-8" src="plantaria-logo.png" alt="plantaria-logo" />
					<h1 className="mt-4 leading-normal lg:leading-relaxed text-3xl md:text-4xl lg:text-5xl text-primary">
						Start growing your
						<span className="block md:inline"> urban garden today</span>
					</h1>
					<p className="mt-1 text-gray-500 text-sm md:text-base">
						Sign up to <span className="text-lima-700 font-medium">plantaria</span> and join our amazing community
					</p>
				</div>

				<div className="mt-14 w-full space-y-4 ">
					{/* TODO: Turn this into a form component */}
					<div className="space-y-3">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="location">Location</Label>
							<Input id="location" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<PasswordInput id="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirm-password">Confirm Password</Label>
							<PasswordInput id="confirm-password" />
						</div>
						<Button type="submit" className="w-full">
							Sign Up
						</Button>
					</div>

					<div className="text-center">
						<span>Already have an account?</span>{" "}
						<Link to={"/login"} className="text-primary hover:underline">
							Login
						</Link>
					</div>
					<div className="m-0 relative w-full flex justify-center">
						<p className="w-fit text-sm text-center bg-white px-2 text-gray-500 z-10">
							OR
						</p>
						<hr className="absolute top-1/2 w-full h-0.5 bg-gray-300" />
					</div>

					<SocialsAuth />
				</div>
			</section>

			{/* Background Image Section */}
			<section className="hidden md:block size-full relative overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-no-repeat"
					style={{
						backgroundPositionX: "60%",
						backgroundImage: "url('person-giving-vegetables.jpg')",
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
				<p
					className={cn(
						"absolute bottom-6 left-6 w-3/4 text-white font-bold",
						"lg:bottom-12 lg:left-12 lg:w-4/5 xl:w-3/5 md:text-4xl lg:text-5xl",
					)}
				>
					Start growing your urban garden today.
				</p>
			</section>
		</div>
	);
};

export default SignUpPage;
