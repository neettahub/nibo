import Jimp from 'jimp'
import { Image } from './Image'
import { AddCircleProps, AddProtocol, AddRectangleProps, AddTextProps } from './interfaces/AddProtocol'
import { ReturnImageInformation, ReturnTextInformation } from './interfaces/ImageProtocol'
import { Image as ImageElement } from './structures/Elements/Image'
import { resolvePositions } from './utils/resolvePositions'

export class Add implements AddProtocol {
  private constructor (
    private image: Jimp,
    private promises: Set<Promise<any>>
  ) {}

  circle (props: AddCircleProps): ReturnImageInformation {
    const [positionX, positionY] = props.position
    const [width, height, color] = props.data

    const radius = props.radius ?? (width + height) / 4

    const imageCirculated = new Jimp(width, height, color)

    const resolvedPositions = resolvePositions(
      this.image,
      imageCirculated,
      positionX || 0,
      positionY || 0,
      props.orientation
    )

    if (props.image) {
      imageCirculated.composite(props.image.resize(width, height), 0, 0)
    }

    const copy = this.image.clone()

    this.image.composite(
      imageCirculated.circle({ radius, x: width / 2, y: height / 2 }),
      resolvedPositions.x,
      resolvedPositions.y
    )

    return {
      width,
      height,
      oldImage: copy,
      newImage: this.image.clone(),
      createdImage: Image.create(ImageElement.create(width, height, color))
    }
  }

  rectangle (props: AddRectangleProps): ReturnImageInformation {
    const rectangleImage = new Jimp(1, 1)

    const [width, height, color] = props.data
    const [positionX, positionY] = props.position

    if (props.image) {
      rectangleImage
        .resize(width, height)
        .composite(props.image.resize(width, height), 0, 0)
    } else if (props.data) {
      rectangleImage
        .resize(width, height)
        .composite(new Jimp(width, height, color), 0, 0)
    }

    if (props.rotate) rectangleImage.rotate(props.rotate)

    const resolvedPositions = resolvePositions(
      this.image,
      rectangleImage,
      positionX || 0,
      positionY || 0,
      props.orientation
    )

    const copy = this.image.clone()

    this.image.composite(rectangleImage, resolvedPositions.x, resolvedPositions.y)

    return {
      width,
      height,
      oldImage: copy,
      newImage: this.image.clone(),
      createdImage: Image.create(ImageElement.create(width, height, color))
    }
  }

  async text (props: AddTextProps): Promise<ReturnTextInformation> {
    const fontPromise = Jimp.loadFont(props.fontFilePath)
    this.promises.add(fontPromise)

    const font = await fontPromise
    if (!font) throw new Error('font not found')

    const width = Jimp.measureText(font, props.value)
    const height = Jimp.measureTextHeight(font, props.value, width)

    const image = new Jimp(width, height)
      .print(font, 0, 0, props.value)
      .resize(props.fontSize, Jimp.AUTO)

    const resolvedPositions = resolvePositions(
      this.image,
      image,
      props.position[0] || 0,
      props.position[1] || 0,
      props.orientation
    )

    const copy = this.image.clone()

    this.image.composite(image, resolvedPositions.x, resolvedPositions.y)

    return {
      width,
      height,
      oldImage: copy,
      newImage: this.image.clone(),
      text: props.value,
      fontFilePath: props.fontFilePath,
      ...resolvedPositions
    }
  }

  static create (image: Jimp, promises: Set<Promise<any>>): Add {
    return new Add(image, promises)
  }
}
