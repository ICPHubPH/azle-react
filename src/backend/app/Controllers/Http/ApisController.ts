import { Configuration } from "Database/entities/configuration";
import type { Response, Request } from "express";

export namespace ApisController {
	export async function greet(request: Request, response: Response) {
		response.json({ greeting: `Hello, ${request.query.name}` });
	}

	export async function configurations(request: Request, response: Response) {
		const configuration = await Configuration.find();

		response.json({
			status: 1,
			data: configuration,
		});
	}

	export async function insert_configuration(request: Request, response: Response) {
		const { key, value } = request.body;
		await Configuration.insert({ key, value });

		const checkIfExist = await Configuration.findBy({ key });

		if (!checkIfExist) {
			response.json({
				status: 0,
				message: "Configuration already exists!",
			});
		}

		response.json({
			status: 1,
			message: "Configuration has been inserted!",
		});
	}

	export async function update_configuration(request: Request, response: Response) {
		const { key, value } = request.body;
		const getConfiguration = await Configuration.findBy({ key });

		if (!getConfiguration) {
			response.json({
				status: 0,
				message: "Configuration not found!",
			});
		}

		await Configuration.update({ key }, { value });
		response.json({
			status: 1,
			message: "Configuration has been updated!",
		});
	}

	export async function delete_configuration(request: Request, response: Response) {
		const { key } = request.body;
		const getConfiguration = await Configuration.findBy({ key });

		if (!getConfiguration) {
			response.json({
				status: 0,
				message: "Configuration not found!",
			});
		}

		await Configuration.delete({ key });

		response.json({
			status: 1,
			message: "Configuration has been deleted!",
		});
	}
}