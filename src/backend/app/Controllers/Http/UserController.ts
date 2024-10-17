import { hashPassword } from 'App/utils/helpers';
import { User } from 'Database/entities/user';
import { Response, Request } from 'express';

export default class UserController {
    // static async greet(request: Request, response: Response) {
    //     response.json({ greeting: `Hello, ${request.query.name}` });
    // }

    static async users(request: Request, response: Response){
        const users = await User.find(); //ibabalik nya lahat ng users

        response.json({
            status: 200,
            data: users
        });
    }

    static async get_user(request: Request, response: Response){
        const { user_id } = request.body;
        const user = await User.findBy({user_id}); //kukunin nya isang user

        if (!user){
            response.status(400);
            return response.json({
                status: 400,
                message: "User not found!"
            });
        }

        return response.json({
            status: 200,
            data: user
        });
    }

    static async create_user(request: Request, response: Response){
        let { user_name, user_username, user_email, user_password } = request.body;

        try {
            const checkIfExist = await User.findOneBy({ user_username });
        
            if (checkIfExist) {
                response.status(400);
                return response.json({
                    status: 400,
                    message: "Username already exists!"
                });
            }
            // console.log("out");
            // try {
            //     const hashedPassword = await hashPassword(user_password);
            //     console.log("Hashed password:", hashedPassword);
            // } catch (error) {
            // console.error("Error in hashPassword:", error);
            // }
            // console.log("in");
            const user = new User();
            user.user_name = user_name;
            user.user_username = user_username;
            user.user_email = user_email;
            user.user_password = user_password;
            user.classes = [];

            await User.insert(user);    
            return response.status(200).json({message: "User has been created!"});
        } catch (error) {
            return response.status(400).json({message: "Error in creating the user.", error});
        }
    }

    static async update_user(request: Request, response: Response){
        let { user_id, user_name, user_username, user_email, user_password } = request.body;
        const getConfiguration = await User.findBy({ user_id });

        if(!getConfiguration){ // if hindi nageexist yung dapat na iuupdate na data magrereturn ng error
            return response.json({
                status: 400,
                message: "User not found!"
            });
        }
        // if nageexist, iuupdate na nya yung value
        
        // user_password = hashPassword(user_password);
        
        await User.update({ user_id }, { user_name, user_username, user_email, user_password });
        return response.json({
            status: 200,
            message: "User has been updated!",
        });
    }

    static async delete_user(request: Request, response: Response){
        const { user_id } = request.body;
        const getConfiguration = await User.findBy({ user_id });

        if(!getConfiguration){ // if hindi nageexist yung dapat na idedelete na data, magrereturn ng error
            return response.json({
                status: 400,
                message: "User not found!"
            });
        }

        // if nageexist idedelete na nya
        await User.delete({ user_id });

        return response.json({
            status: 200,
            message: "User has been deleted!",
        });
    }
}

