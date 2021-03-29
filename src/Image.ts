import Jimp from 'jimp'
import { Add } from './Add'
import { AddProtocol } from './interfaces/AddProtocol'
import { ImageConstructorProps, ImageCreateProps, ImageProtocol } from './interfaces/ImageProtocol'
import { ImageElement } from './structures/Elements/Image'

export class Image implements ImageProtocol {
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

  static create (data: ImageCreateProps) {
    const image = data instanceof ImageElement
      ? new Jimp(data.width, data.height, data.color)
      : data

    return new Image({
      image,
      add: Add.create(image)
    })
  }
}
