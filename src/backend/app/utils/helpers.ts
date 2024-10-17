import bcrypt from 'bcryptjs';

const saltRounds: number = 10;

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
    try {
        const salt: string = await bcrypt.genSalt(saltRounds); 
        const hashedPassword: string = await bcrypt.hash(password, salt); 
        console.log("Hashed Password:", hashedPassword); // Debugging output
        return hashedPassword;
    } catch (error) {
        console.error("Hashing error:", error); // Capture hashing error
        throw error;
    }
};

// Function to compare a plain password with a hashed password
export const comparePassword = async (plain: string, hashed: string): Promise<boolean> => {
    try {
        const match: boolean = await bcrypt.compare(plain, hashed);
        console.log("Password Match:", match); // Debugging output
        return match;
    } catch (error) {
        console.error("Comparison error:", error); // Capture comparison error
        throw error;
    }
};
