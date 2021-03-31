import Jimp from 'jimp'
import { Image } from '../Image'
import { Image as ImageElement } from '../structures/Elements/Image'
import { AddProtocol } from './AddProtocol'

export type ImageOrientation = [
  'left' | 'right',
  'top' | 'bottom'
]

export interface ReturnImageInformation {
  width: number
  height: number
  oldImage: Jimp
  newImage: Jimp
  createdImage: Image
}

export interface ImageConstructorProps {
  image: Jimp
  add: AddProtocol
}

export type ImageCreateProps = Jimp | ImageElement

export interface ImageProtocol {
  value: Jimp
}
