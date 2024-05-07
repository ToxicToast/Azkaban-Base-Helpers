import slugify from 'slugify';

export class SlugHelper {
  readonly value: string;

  private constructor(value: string) {
    this.value = this.slugifyConfig(value);
  }

  static create(value: string): SlugHelper {
    return new SlugHelper(value);
  }

  private slugifyConfig(value: string) {
    return slugify(value, {
      replacement: '-',
      lower: true,
      strict: true,
      locale: 'en',
      trim: true,
    });
  }
}
