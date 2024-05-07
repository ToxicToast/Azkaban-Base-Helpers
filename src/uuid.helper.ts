import { v4, validate } from 'uuid';

export class UuidHelper {
  readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(): UuidHelper {
    return new UuidHelper(v4());
  }

  static validate(value: string): boolean {
    return validate(value);
  }
}
