import crypto from 'crypto';

// Generate a random salt
const generateSalt = (length: number): string => {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};

// Hash the password using SHA-256 and the salt
const hashPassword = (password: string, salt: string): string => {
    const hash = crypto.createHmac('sha256', salt);  // Using HMAC with SHA-256
    hash.update(password);
    const hashedPassword = hash.digest('hex');
    return hashedPassword;
};

// Function to generate hashed password and salt
export const generatePasswordHash = (password: string): { salt: string, hash: string } => {
    const salt = generateSalt(16);  // Generate a 16-byte salt
    const hash = hashPassword(password, salt);  // Hash the password with the salt
    return {
        salt: salt,
        hash: hash
    };
};

// Verify if the entered password is correct
export const verifyPassword = (password: string, hash: string, salt: string): boolean => {
    const hashedPassword = hashPassword(password, salt);
    return hashedPassword === hash;  // Compare hashed passwords
};

// Usage example
export const { salt, hash } = generatePasswordHash('mysecretpassword');
console.log('Salt:', salt);
console.log('Hash:', hash);

// Verify the password
const isValid = verifyPassword('mysecretpassword', hash, salt);
console.log('Password valid:', isValid);
