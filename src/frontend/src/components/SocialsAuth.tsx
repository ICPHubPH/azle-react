import { Button } from "./ui/button";
import { Facebook, Google, InternetComputer } from "@/assets/icons";

const SocialsAuth = () => {
	return (
		<div className="space-y-4">
			<Button
				variant={"outline"}
				className="w-full border-indigo-500 shadow-md shadow-indigo-200"
			>
				<InternetComputer className="size-6 p-1 bg-white rounded-full mr-2" />
				Continue with Internet Identity
			</Button>
			<Button variant={"outline"} className="w-full">
				<Google className="size-6 p-1 bg-white rounded-full mr-2" />
				Continue with Google
			</Button>
			<Button variant={"outline"} className="w-full">
				<Facebook className="size-6 p-1 bg-white rounded-full mr-2" />
				Continue with Facebook
			</Button>
		</div>
	);
};

export default SocialsAuth;
