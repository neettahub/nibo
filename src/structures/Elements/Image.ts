export class Image {
  public width!: number
  public height!: number
  public color?: string

  private constructor (width: number, height: number, color?: string) {
    Object.assign(this, {
      width,
      height,
      color
    })
  }

  static create (width: number, height: number, color?: string) {
    return new Image(width, height, color)
  }
}
