import Jimp from 'jimp'
import { AddCircleProps, AddProtocol, AddRectangleProps } from './interfaces/AddProtocol'
import { resolvePositions } from './utils/resolvePositions'

export class Add implements AddProtocol {
  private constructor (private image: Jimp) {}

  circle (props: AddCircleProps): void {
    const [positionX, positionY] = props.position

    if (props.image) {
      const positions = resolvePositions(this.image, props.image, positionX, positionY, props.orientation)

      const radius = props.radius ?? (props.image.getWidth() + props.image.getHeight()) / 4

      this.image.composite(
        props.image.circle({ radius, x: 0, y: 0 }),
        positions.x,
        positions.y
      )
    } else if (props.data) {
      const [width, height, color] = props.data
      const radius = props.radius ?? (width + height) / 4

      const circleImage = new Jimp(width, height, color)
        .circle({ radius, x: width / 2, y: height / 2 })

      const positions = resolvePositions(this.image, circleImage, positionX, positionY, props.orientation)

      this.image.composite(circleImage, positions.x, positions.y)
    }
  }

  rectangle (props: AddRectangleProps): Jimp {
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
      positionX,
      positionY,
      props.orientation
    )

    this.image.composite(rectangleImage, resolvedPositions.x, resolvedPositions.y)

    return rectangleImage
  }

  static create (image: Jimp): Add {
    return new Add(image)
  }
}
