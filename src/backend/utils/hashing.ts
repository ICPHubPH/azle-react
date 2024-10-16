import { pbkdf2Sync, randomBytes } from 'crypto';

export async function hash(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex');
  const iterations = 256;
  const hash = pbkdf2Sync(password, salt, iterations, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

export async function verifyHash(password: string, storedHash: string): Promise<boolean> {
  const [salt, originalHash] = storedHash.split(':');
  const iterations = 256;
  const hash = pbkdf2Sync(password, salt, iterations, 64, 'sha512').toString('hex');
  return hash === originalHash;
}