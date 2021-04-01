import Jimp from 'jimp'
import { ImageOrientation, ReturnImageInformation, ReturnTextInformation } from './ImageProtocol'

export interface AddCircleProps {
  /** An image to be the circle */
  image?: Jimp

  /** If you didn't provide an image, you must create one within this props */
  data: [
    /** Width */
    number,
    /** Height */
    number,
    /** Color */
    string?
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
  /** Data property will be ignored */
  image?: Jimp

  data: [
    /** Width */
    number,
    /** Height */
    number,
    /** Color */
    string?
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

export interface AddTextProps {
  value: string
  fontFilePath: string

  /** The position X, Y (based on the main image) */
  position: [
  /** By default more means closer to the right border */
  number | 'center',
  /** By default more means closer to the bottom border */
  number | 'center'
  ]

  fontSize: number

  widthToBreakLine?: number

  orientation?: Partial<ImageOrientation>
}

export interface AddProtocol {
  circle(props: AddCircleProps): ReturnImageInformation
  rectangle(props: AddRectangleProps): ReturnImageInformation
  text(props: AddTextProps): Promise<ReturnTextInformation>
}
