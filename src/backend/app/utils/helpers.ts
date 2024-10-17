import bcrypt from 'bcryptjs';

const saltRounds: number = 10;

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
    const salt: string = await bcrypt.genSalt(saltRounds); 
    const hashedPassword: string = await bcrypt.hash(password, salt); 
    return hashedPassword;
};

// Function to compare a plain password with a hashed password
export const comparePassword = async (plain: string, hashed: string): Promise<boolean> => {
    const match: boolean = await bcrypt.compare(plain, hashed); 
    return match;
};

//hindi gumagana :) kailangan pa debug