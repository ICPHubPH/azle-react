import { FacebookOutline } from "@/assets/icons/facebook-outline";
import { GithubOutline } from "@/assets/icons/github-outline";
import { Home, Phone } from "lucide-react";

const Footer = () => {
	return (
		<footer className="py-8 px-4 md:px-8 flex justify-center">
			<div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="flex flex-col items-center md:items-start gap-y-4">
					<div className="flex items-center mb-4 gap-x-2">
						<img src="Logo.png" alt="Logo" className="h-10 w-10" />
						<img
							className="h-4"
							src="plantaria-logo.png"
							alt="plantaria-logo"
						/>
					</div>
					<p className="text-gray-600 flex items-center gap-x-2 text-center md:text-left">
						<Home />
						<span>BSU Sarmiento Campus</span>
					</p>
					<p className="text-gray-600 flex items-center gap-x-2 text-center md:text-left">
						<Phone />
						<span>+935 785 0648</span>
					</p>
					<div className="flex space-x-4 mt-4">
						<a href="#" aria-label="Facebook" className="hover:opacity-80">
							<FacebookOutline className="size-6 text-gray-600" />
						</a>
						<a href="#" aria-label="Github" className="hover:opacity-80">
							<GithubOutline className="size-6 text-gray-600" />
						</a>
					</div>
				</div>

				<div className="text-center md:text-left">
					<h3 className="font-semibold text-lg mb-4">Company</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="text-gray-600 hover:underline">
								Our Story
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:underline">
								FAQ
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:underline">
								Meet the Team
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:underline">
								Testimonials
							</a>
						</li>
					</ul>
				</div>

				<div className="text-center md:text-left">
					<h3 className="font-semibold text-lg mb-4">Privacy & Terms</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="text-gray-600 hover:underline">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:underline">
								Terms of Use
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:underline">
								Community Guideline
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
