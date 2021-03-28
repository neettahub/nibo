import Jimp from 'jimp'
import { Add } from './Add'
import { AddProtocol } from './interfaces/AddProtocol'
import { ImageConstructorProps } from './interfaces/ImageProtocol'

export class Image {
  private _image!: Jimp
  public add!: AddProtocol

  constructor (data: ImageConstructorProps) {
    Object.assign(this, {
      _image: data.image,
      add: data.add
    })
  }

  get value (): Jimp {
    return this._image
  }

  static create (width: number, height: number, color: string) {
    const image = new Jimp(width, height, Jimp.cssColorToHex(color))

    return new Image({
      image,
      add: Add.create(image)
    })
  }
}
