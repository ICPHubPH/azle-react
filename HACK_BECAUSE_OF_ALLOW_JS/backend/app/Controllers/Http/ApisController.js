import { Configuration } from 'Database/entities/configuration';
export default class ApisController {
    static async greet(request, response) {
        response.json({ greeting: `Hello, ${request.query.name}` });
    }
    static async configurations(request, response) {
        const configuration = await Configuration.find();
        response.json({
            status: 1,
            data: configuration
        });
    }
    static async insert_configuration(request, response) {
        const { key, value } = request.body;
        await Configuration.insert({ key, value });
        const checkIfExist = await Configuration.findBy({ key });
        if (!checkIfExist) {
            response.json({
                status: 0,
                message: "Configuration already exists!"
            });
        }
        response.json({
            status: 1,
            message: "Configuration has been inserted!",
        });
    }
    static async update_configuration(request, response) {
        const { key, value } = request.body;
        const getConfiguration = await Configuration.findBy({ key });
        if (!getConfiguration) {
            response.json({
                status: 0,
                message: "Configuration not found!"
            });
        }
        await Configuration.update({ key }, { value });
        response.json({
            status: 1,
            message: "Configuration has been updated!",
        });
    }
    static async delete_configuration(request, response) {
        const { key } = request.body;
        const getConfiguration = await Configuration.findBy({ key });
        if (!getConfiguration) {
            response.json({
                status: 0,
                message: "Configuration not found!"
            });
        }
        await Configuration.delete({ key });
        response.json({
            status: 1,
            message: "Configuration has been deleted!",
        });
    }
}
