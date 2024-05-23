export class StringGeneratorHelper {
  readonly value: string;

  private constructor(length: number) {
    this.value = this.generate(length);
  }

  static create(length: number): StringGeneratorHelper {
    return new StringGeneratorHelper(length);
  }

  private generate(length: number) {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }
}
