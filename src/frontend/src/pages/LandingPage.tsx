import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
	{ id: 1, url: "/", name: "Home" },
	{ id: 2, url: "/about", name: "About" },
	{ id: 3, url: "/goals", name: "Goals" },
];

const LandingPage = () => {
	return (
		<div className="mx-[75px] flex flex-col gap-y-12">
			<header className="p-4 grid grid-cols-3">
				<div className="flex items-center gap-x-4">
					<img className="h-14 w-14 bg-primary" src="" alt="logo" />
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
					<Link to="/">
						<Button variant="ghost">Login</Button>
					</Link>
					<Link to="/">
						<Button>Sign Up</Button>
					</Link>
				</div>
			</header>

			<section className="h-[55rem] flex flex-col items-center justify-center ">
				<div className="flex flex-col items-center gap-y-6 p-4 font-medium ">
					<div className="text-6xl text-center leading-snug flex flex-col">
						<span>Join Us In a</span>
						<div className="flex gap-x-1 items-center">
							<span className="bg-lima-200 rounded-full px-4 py-2">
								Hunger Free
							</span>
							<span> World</span>
						</div>
					</div>
					<Button className="flex gap-x-2 items-center bg-lima-600 font-medium rounded-full">
						<span className="text-base sm:text-lg">Visit us</span>
						<ArrowUpRight
							className="bg-white p-1 rounded-full text-black"
							size={20}
						/>
					</Button>
				</div>

				<div className="h-96 w-full flex justify-between items-end gap-x-4 p-4">
					<div
						className=" h-full w-1/5 rounded-3xl bg-cover bg-center text-white shadow-lg"
						style={{ backgroundImage: "url('Maskgroup.png')" }}
					/>

					<div className="bg-lima-700 h-4/5 w-1/5 rounded-3xl flex flex-col justify-center items-center text-white shadow-lg ">
						<span className="text-5xl font-bold">200+</span>
						<span className="text-lg font-medium">monthly</span>
						<span className="text-lg font-medium">users</span>
					</div>

					<div className="bg-lima-200 h-4/6 w-1/4 rounded-3xl flex flex-col justify-center items-center text-slate-900 shadow-lg ">
						<span className="text-5xl font-bold">500+</span>
						<span className="text-lg font-medium">Urban Farming</span>
						<span className="text-lg font-medium">Tutorials</span>
					</div>

					<div className="bg-lima-500 h-4/5 w-1/5 rounded-3xl flex flex-col justify-center items-center text-white shadow-lg ">
						<span className="text-5xl font-bold">50+</span>
						<span className="text-lg font-medium">Daily farming</span>
						<span className="text-lg font-medium">Resources</span>
					</div>

					<div
						className="h-full w-1/5 rounded-3xl bg-cover bg-center text-white shadow-l0g"
						style={{ backgroundImage: "url('Maskgroup-2.png')" }}
					/>
				</div>
			</section>

			<div className="bg-black h-12" />
			<section className="h-[40rem] flex flex-col justify-evenly items-center">
				<h1 className="text-4xl font-medium">SECTION TITLE</h1>

				<div className="h-96 w-full flex justify-between items-center gap-4">
					<div
						className="w-1/4 h-full bg-fit bg-center  bg-no-repeat"
						style={{ backgroundImage: "url('highfoodprices.png')" }}
					/>

					<div
						className="w-2/5 h-full bg-fit bg-center bg-no-repeat"
						style={{ backgroundImage: "url('600million.png')" }}
					/>

					<div
						className="w-1/4 h-full bg-cover bg-center bg-no-repeat"
						style={{ backgroundImage: "url('1in3people.png')" }}
					/>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
