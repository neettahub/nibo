import Jimp from 'jimp'
import { ImageOrientation } from './ImageProtocol'

export interface AddCircleProps {
  /** An image to be the circle */
  image?: Jimp

  /** If you didn't provide an image, you must create one within this props */
  data?: [
    /** Width */
    number,
    /** Height */
    number,
    /** Color */
    string
  ]

  /** The position X, Y (based on the main image) */
  position: [
    /** More means closer to the right border */
    number | 'center',
    /** More means closer to the bottom */
    number | 'center'
  ]
  /** The radius to perform the circle */
  radius?: number

  orientation?: Partial<ImageOrientation>
}

export interface AddRectangleProps {
  data: [
    /** Width */
    number,
    /** Height */
    number,
    /** Color */
    string
  ]

  /** The position X, Y (based on the main image) */
  position: [
    /** More means closer to the right border */
    number | 'center',
    /** More means closer to the bottom */
    number | 'center'
  ]
  orientation?: Partial<ImageOrientation>

  rotate?: number
}

export interface AddProtocol {
  circle(props: AddCircleProps): void
  rectangle(props: AddRectangleProps): Jimp
}
