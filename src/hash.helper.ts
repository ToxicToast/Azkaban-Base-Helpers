import * as bcrypt from 'bcrypt';

const hashString = '$2b$16$w3WQWZTAMzvO6nz.aZzXKO';

export function HashPasswordHelper(password: string): string {
  return bcrypt.hashSync(password, hashString);
}

export function ComparePasswordHelper(
  password: string,
  storedPasswordHash: string,
): boolean {
  return bcrypt.compareSync(password, storedPasswordHash);
}

export function GenerateSaltHelper(length: number): string {
  return bcrypt.genSaltSync(length);
}
