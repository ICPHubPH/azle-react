import { Class } from 'Database/entities/class';
import { User } from 'Database/entities/user';
import { Response, Request } from 'express';
import { In } from 'typeorm';

export default class ClassController {
    static async classes(request: Request, response: Response){
        const user_id = parseInt(request.params.user_id);

        try {
            const user = await User.findOneBy({ user_id });
            if (!user) {
                throw new Error("User not found.");
            }
            const classes = await Class.find({
                where: { class_owner: { user_id } },
            });
    
            if (classes.length === 0) {
                return response.status(200).json({ message: 'No classes found for this user.' });
            }
            return response.status(200).json({ message: "Classes found!", payload: classes}); // Return the found classes
        } catch (error) {
            return response.status(400).json({ message: error});
        }
    }

    static async create_class(request: Request, response: Response) {
        const { class_name, class_description, class_ownerId, class_membersIds } = request.body;
        try {
            const class_owner = await User.findOneBy({user_id: class_ownerId});
            if (!class_owner){
                throw new Error("Class owner not found");
            }
            const class_members = await User.findBy({ user_id: In(class_membersIds || []) });
            if (class_membersIds && class_members.length !== class_membersIds.length) {
                throw new Error("One or more users not found");
            }

            const classEntity = new Class();
            classEntity.class_name = class_name;
            classEntity.class_description = class_description;
            classEntity.class_owner = class_owner;
            classEntity.class_members = class_members;

            console.log("out");
            await classEntity.save();
            console.log("in");
            return response.status(200).json({ message: "Class created!", payload: classEntity});
        } catch (error) {
            return response.status(400).json({ message: "Error in creating class: ", error: error })
        }
    }

    static async get_class(request: Request, response: Response){
        const class_id = parseInt(request.params.class_id);

        try {
            const classEntity = await Class.findOneBy({ class_id });
            const deck = await Class.find({ where: { class_id } });
            if (classEntity) {
                return response.status(200).json(classEntity);
            } else {
                throw new Error("Class not found");
            }
        } catch (error) {
            return response.status(404).json({ message: "Error in getting class: ", error });
        }
    }

    static async update_class(request: Request, response: Response) {
        const class_id = parseInt(request.params.class_id);
        const { ...classData } = request.body;

        try {
            const classEntity = await Class.findOneBy({ class_id });
            if (!classEntity) {
                throw new Error("Class not found");
            }

            await Class.update({class_id}, {...classData});
        
            return response.status(200).json({message: "Class updated!"})
        } catch (error) {
            return response.status(400).json({ message: "Error updating class: ", error })
        }
    }
    
    static async delete_class(request: Request, response: Response) {
        const class_id = parseInt(request.params.class_id);
        try {
            const classEntity = await Class.findOneBy({class_id});
            if (!classEntity){
                throw new Error("Class not found!");
            }
            await Class.delete(class_id);
            return response.status(200).json({message: "Class deleted!"})
        } catch (error) {
            return response.status(400).json({ message: "Error creating deck: ", error })
        }
    }    
}