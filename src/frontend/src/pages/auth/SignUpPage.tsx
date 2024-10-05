import React from "react";

const SignUpPage = () => {
	return (
		<div className="h-screen grid grid-cols-1 md:grid-cols-2 relative">
			{/* Sign In Section */}
			<section className="p-6 md:p-8">
				<div className="sm:w-2/3 md:w-full xl:w-2/3">
					<h1 className="font-light text-2xl lg:text-3xl">
						Website <span className="text-primary">Name</span>
					</h1>
					<h1 className="leading-normal lg:leading-relaxed text-4xl lg:text-5xl text-primary">
						Start growing your urban garden today
					</h1>
					<p className="text-gray-500">
						Sign up to __ and join our amazing community
					</p>
				</div>
			</section>

			{/* Background Image Section */}
			<section className="hidden md:block size-full relative overflow-hidden">
				<div className="absolute inset-0 bg-cover bg-right bg-no-repeat bg-[url('person-giving-vegetables.png')]" />
				{/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" /> */}
				{/* <p className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 w-2/4 lg:w-3/5 xl:w-2/5 text-white font-bold md:text-4xl lg:text-5xl">
					Start growing your urban garden today.
				</p> */}
			</section>
		</div>
	);
};

export default SignUpPage;
