import { Button } from "@/components/ui/button";
import { PageRoutes } from "@/constants/PageRoutes";
import Footer from "@/layout/Footer";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
	{ id: 1, url: PageRoutes.Landing, name: "Home" },
	{ id: 2, url: "/about", name: "About" },
	{ id: 3, url: "/goals", name: "Goals" },
];

const LandingPage = () => {
	return (
		<div className="flex flex-col gap-y-12 ">
			<header className="p-4 grid grid-cols-3 mx-[75px] ">
				<div className="flex items-center gap-x-4">
					<img className="h-14 w-14 " src="Logo.png" alt="logo" />
					<h1 className="font-medium text-xl text-foreground">Project Name</h1>
				</div>

				<nav className="flex justify-evenly items-center">
					{links.map((value) => (
						<Link
							className="text-lg hover:underline font-medium"
							key={value.id}
							to={value.url}
						>
							{value.name}
						</Link>
					))}
				</nav>

				<div className=" flex justify-end items-center gap-x-4">
					<Link to={PageRoutes.Login}>
						<Button variant="ghost">Login</Button>
					</Link>
					<Link to={PageRoutes.SignUp}>
						<Button>Sign Up</Button>
					</Link>
				</div>
			</header>

			<section className="h-[55rem] flex flex-col items-center justify-center mx-[75px] ">
				<div className="flex flex-col items-center gap-y-6 p-4 font-medium text-center">
					<div className="text-4xl md:text-6xl leading-snug flex flex-col">
						<span>Join Us In a</span>
						<div className="flex gap-x-1 items-center">
							<span className="bg-lima-200 rounded-full px-4 py-2">
								Hunger Free
							</span>
							<span>World</span>
						</div>
					</div>
					<Button className="space-x-2 items-center bg-lima-600 font-medium rounded-full">
						<span className="text-sm sm:text-lg">Visit us</span>
						<ArrowUpRight className="bg-white p-1 rounded-full text-black" size={20} />
					</Button>
				</div>

				<div className="h-96 w-full flex justify-between items-end gap-x-6 p-4">
					<div className="h-full w-1/5 rounded-3xl bg-center shadow-lg ">
						<img
							src="woman-in-greenhouse.png"
							alt="Woman in Greenhouse"
							className="size-full rounded-3xl object-cover"
						/>
					</div>

					<div className="bg-lima-700 h-4/5 w-1/5 rounded-3xl flex flex-col justify-center items-center text-white shadow-lg">
						<span className="text-5xl font-bold">200+</span>
						<span className="text-lg font-medium">monthly</span>
						<span className="text-lg font-medium">users</span>
					</div>

					<div className="bg-lima-200 h-4/6 w-1/4 rounded-3xl flex flex-col justify-center items-center text-lima-900 shadow-lg ">
						<span className="text-5xl font-bold">500+</span>
						<span className="text-lg font-medium">Urban Farming</span>
						<span className="text-lg font-medium">Tutorials</span>
					</div>

					<div className="bg-lima-500 h-4/5 w-1/5 rounded-3xl flex flex-col justify-center items-center text-white shadow-lg ">
						<span className="text-5xl font-bold">50+</span>
						<span className="text-lg font-medium">Daily farming</span>
						<span className="text-lg font-medium">Resources</span>
					</div>

					<div className="h-full w-1/5 rounded-3xl bg-center text-white shadow-lg">
						<img
							src="couple-checking-plants.png"
							alt="Couple checking plants"
							className="size-full rounded-3xl object-cover"
						/>
					</div>
				</div>
			</section>

			<div className="bg-lima-600 h-12" />

			<section className="h-auto md:h-[40rem] flex flex-col justify-evenly items-center mx-4 md:mx-[75px]">
				<h1 className="text-3xl sm:text-5xl font-bold">Why It Matters?</h1>

				<div className="h-auto md:h-96 w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4">
					<div className="w-full md:w-1/4 h-72 md:h-full">
						<img
							src="high-food-prices.png"
							alt="High food prices continues to plague many nations despite falling in 2021."
							className="size-full object-scale-down object-center"
						/>
					</div>

					<div className="w-full md:w-2/5 h-72 md:h-full flex flex-col items-center md:gap-y-4 p-4">
						<img
							src="600million.png"
							alt="An alarming projection for 2030: over 600 million people worldwide facing hunger."
							className="w-full h-auto object-scale-down object-center"
						/>

						<div className="text-xl flex items-center gap-x-2 underline hover:text-lime-600 transition-colors cursor-pointer">
							<span>Know more</span>
							<MoveRight size={30} />
						</div>
					</div>

					<div className="w-full md:w-1/4 h-72 md:h-full">
						<img
							src="1-in-3-people.png"
							alt="1 in 3 people worldwide struggle with moderate to severe food insecurity."
							className="size-full object-scale-down object-center"
						/>
					</div>
				</div>
			</section>

			{/* Our Response Section */}
			<section className="bg-lima-600 h-auto md:h-[40rem] max-md:py-12">
				<div className="mx-4 md:mx-[75px] h-full flex flex-col justify-evenly items-center">
					<h1 className="text-3xl sm:text-5xl font-bold text-white">Our Response</h1>

					<div className="h-auto w-full flex flex-col md:flex-row justify-between items-center gap-4 ">
						<div className="w-full md:w-1/4 h-72 md:h-full flex justify-center items-center">
							<img
								src="accesible-education.png"
								alt="Deliver Accessible urban farming Education"
								className="size-full object-scale-down object-center"
							/>
						</div>

						<div className="w-full md:w-2/5 h-72 md:h-full flex justify-center items-center">
							<img
								src="community-of-farmers.png"
								alt="Foster a connected Community of Farmers"
								className="size-full object-scale-down object-center"
							/>
						</div>

						<div className="w-full md:w-1/4 h-72 md:h-full flex justify-center items-center">
							<img
								src="sustainable.png"
								alt="Promote Sustainable Food Sources"
								className="size-full object-scale-down object-center"
							/>
						</div>
					</div>
				</div>
			</section>
           <Footer/>
		</div>
	);
};

export default LandingPage;
