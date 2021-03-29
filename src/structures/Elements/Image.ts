export class ImageElement {
  public width!: number
  public height!: number
  public color?: string

  constructor (width: number, height: number, color?: string) {
    Object.assign(this, {
      width,
      height,
      color
    })
  }
}
