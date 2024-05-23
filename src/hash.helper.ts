import * as bcrypt from 'bcrypt';

export function HashPasswordHelper(salt: string, password: string): string {
  return bcrypt.hashSync(password, salt);
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
