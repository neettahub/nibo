import Jimp from 'jimp'
import { AddProtocol } from './AddProtocol'

export type ImageOrientation = [
  'left' | 'right',
  'top' | 'bottom'
]

export interface ImageConstructorProps {
  image: Jimp
  add: AddProtocol
}

export interface ImageProtocol {
  image: Jimp
}
