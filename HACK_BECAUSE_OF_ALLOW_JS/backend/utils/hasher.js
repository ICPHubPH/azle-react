import * as bcryptjs from "bcryptjs";
export const hasher = async (anything) => {
    const salt = await bcryptjs.genSalt(10);
    const hashed = await bcryptjs.hash(anything, salt);
    return hashed;
};
