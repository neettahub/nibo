import Jimp from 'jimp'
import { Add } from './Add'
import { AddProtocol } from './interfaces/AddProtocol'
import { ImageConstructorProps, ImageCreateProps, ImageProtocol } from './interfaces/ImageProtocol'
import { Image as ImageElement } from './structures/Elements/Image'

export class Image implements ImageProtocol {
  private _image!: Jimp
  private promises!: Set<Promise<any>>
  public add!: AddProtocol

  constructor (data: ImageConstructorProps) {
    Object.assign(this, {
      _image: data.image,
      add: data.add,
      promises: data.promises
    })
  }

  get value (): Jimp {
    return this._image
  }

  save (path: string): Promise<Jimp> {
    return this._image.writeAsync(path)
  }

  async saveAfterPromises (path: string): Promise<Jimp> {
    return Promise.all([...this.promises]).then(() => this.save(path))
  }

  static create (data: ImageCreateProps) {
    const image = data instanceof ImageElement
      ? new Jimp(data.width, data.height, data.color)
      : data

    const promises = new Set<Promise<any>>()

    return new Image({
      image,
      promises,
      add: Add.create(image, promises)
    })
  }
}
