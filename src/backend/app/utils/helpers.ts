import bcrypt from 'bcryptjs';

// Define the number of salt rounds (how many times the data is processed by the algorithm)
const saltRounds: number = 10;

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
    const salt: string = await bcrypt.genSalt(saltRounds); // Generate a salt
    const hashedPassword: string = await bcrypt.hash(password, salt); // Hash the password with the salt
    return hashedPassword;
};

// Function to compare a plain password with a hashed password
export const comparePassword = async (plain: string, hashed: string): Promise<boolean> => {
    const match: boolean = await bcrypt.compare(plain, hashed); // Compare the plain password with the hashed one
    return match;
};

//hindi gumagana :) kailangan pa debug